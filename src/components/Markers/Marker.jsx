import { useEffect, useRef, useState } from "react";
import {
  GoogleMapsProvider,
  useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";
import "./Marker.css";

const mapOptions = {
  zoom: 12,
  center: {
    lat: 52.520008,
    lng: 13.404954,
  },
};

export default function Makers() {
  const [mapContainer, setMapContainer] = useState(null);

  return (
    <GoogleMapsProvider
      googleMapsAPIKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      options={mapOptions}
      mapContainer={mapContainer}
    >
      <div
        ref={(node) => setMapContainer(node)}
        style={{ width: "100%", height: "100vh" }}
      />
      <Location />
    </GoogleMapsProvider>
  );
}

function Location() {
  const [lat, setLat] = useState(52.520008);
  const [lng, setLng] = useState(13.404954);
  const { map } = useGoogleMap();
  const markerRef = useRef();

  useEffect(() => {
    if (!map || markerRef.current) return;
    markerRef.current = new window.google.maps.Marker({ map });
  }, [map]);

  useEffect(() => {
    console.log(lat, lng);
  }, [lat, lng, map]);

  return (
    <div className="lat-lng">
      <input
        type="number"
        value={lat}
        onChange={(event) => setLat(parseFloat(event.target.value))}
        step={0.01}
      />
      <input
        type="number"
        value={lng}
        onChange={(event) => setLng(parseFloat(event.target.value))}
        step={0.01}
      />
    </div>
  );
}
