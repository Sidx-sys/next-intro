import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useState, useEffect } from "react";

const Maps = (props) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [markers, setMarkers] = useState();

  useEffect(() => {
    setInitCoord = async () => {
      await navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    };
    setInitCoord();
  }, []);

  return (
    <div>
      <Map google={props.google} zoom={14}>
        <Marker onClick={onMarkerClick} name={"Current location"} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBDrcQI8xe9_Z2_mxlySTZqEQO8RtZHS1Q",
})(Maps);
