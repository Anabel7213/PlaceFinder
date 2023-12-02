import { MarkerF, OverlayView } from "@react-google-maps/api";
import { useState } from "react";
import { Rating } from "@mui/material";
import { MapIcon } from "lucide-react";
import useDistanceCalculator from "@/data/distance";
import Image from "next/image";

const Markers = ({ place, userLocation }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const { getDirections } = useDistanceCalculator(place, userLocation);

  return (
    <MarkerF
      key={place.place_id}
      position={place.geometry.location}
      icon={
        place.opening_hours?.open_now
          ? { url: "markerOpen.svg", scaledSize: { equals: () => false, width: 24, height: 24 } }
          : { url: "markerClosed.svg", scaledSize: { equals: () => false, width: 24, height: 24 } }
      }
      onClick={() => setSelectedPlace(place)}
    >
      {selectedPlace?.reference === place.reference ? (
        <OverlayView position={selectedPlace.geometry.location} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div key={place.place_id} className="flex shrink-0 flex-col border border-black rounded-[4px] bg-white p-4 w-fit">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-1">
                {place.rating}
                <Rating
                  value={place.rating}
                  size="small"
                  readOnly
                  icon={<Image src="star.svg" alt="Rating" width={12} height={12} />}
                  emptyIcon={<Image src="emptyStar.svg" alt="Rating" width={12} height={12} />}
                />
                <span>{place.price_level === 1 ? "·$" : place.price_level === 2 ? "·$$" : place.price_level === 3 ? "·$$$" : place.price_level === 4 ? "·$$$$" : "·$$"}</span>
              </div>
              <button onClick={getDirections} className="p-2 hover:bg-slate-100 rounded-[4px] transition-all">
                <MapIcon size={20} strokeWidth={1.5} />
              </button>
            </div>
            <h1 className="capitalize font-medium text-sm">{place.name}</h1>
            <p>{place.formatted_address.substring(0, place.formatted_address.lastIndexOf(",")).slice(0, 43)}</p>
          </div>
        </OverlayView>
      ) : null}
    </MarkerF>
  );
};

export default Markers;
