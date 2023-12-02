import { useEffect, useState } from "react";

const useDistanceCalculator = (place, userLocation) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const calculateDistance = () => {
      const earthRadius = 6371; // in kilometers

      const degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180);
      };

      const lat1 = place.geometry.location.lat;
      const lng1 = place.geometry.location.lng;
      const lat2 = userLocation.lat;
      const lng2 = userLocation.lng;

      const dLat = degreesToRadians(lat2 - lat1);
      const dLng = degreesToRadians(lng2 - lng1);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) *
          Math.cos(degreesToRadians(lat2)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = earthRadius * c;

      setDistance(distance.toFixed(1));
      return distance.toFixed(2); // Return the distance with 2 decimal places
    };

    calculateDistance();
  }, [place, userLocation]);

  const getDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${place.geometry.location.lat},${place.geometry.location.lng}&travelMode=DRIVING` 
      //couldn't vary travelMode something is just wrong with GooglePlaces API tried accessed RoutesLibrary and TravelMode in every possible way to no avail
    );
  };

  return { distance, getDirections };
};

export default useDistanceCalculator;