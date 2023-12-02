import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import Markers from "./markers";

export default function Map({ userLocation, data }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    mapIds: ["327f00d9bd231a33"],
  });
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      {isLoaded ? (
        <div className="w-full md:w-[1064px] h-[624px] border border-black rounded-[4px]">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={userLocation} options={{ mapId: "327f00d9bd231a33" }} zoom={13}>
            <MarkerF position={userLocation} icon={{ url: "userMarker.svg", scaledSize: { equals: () => false, width: 48, height: 48 } }}>
              {data?.results.map((place: any) => (
                <Markers key={place.place_id} place={place} userLocation={userLocation} />
              ))}
            </MarkerF>
          </GoogleMap>
        </div>
      ) : (
        <div className="w-full md:w-[1064px] h-[624px] border border-black rounded-[4px] bg-slate-100"></div>
      )}
    </>
  );
}
