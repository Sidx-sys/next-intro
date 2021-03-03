import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CoordinateList from "../components/CoordinateList";

const Maps = (props) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [markers, setMarkers] = useState([]);
  const [limitError, setLimitError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setInitCoord = async () => {
      await navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setIsLoading(false);
      });
    };
    setInitCoord();
  }, []);

  const mapClicked = (a, b, event) => {
    if (markers.length === 4) {
      setLimitError(true);
      return;
    }

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkers([...markers, { lat, lng, id: uuidv4() }]);
  };

  const removeLimError = () => {
    setLimitError(false);
  };

  return (
    <div>
      {limitError && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>4 Marker</strong> have already been chosen
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={removeLimError}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      {isLoading ? (
        <div className="text-center" style={{ marginTop: "25rem" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div
              className="card mx-auto mb-3"
              style={{ width: "45rem", height: "45rem" }}
            >
              <div className="card-body">
                <Map
                  google={props.google}
                  zoom={16}
                  style={{ width: "95%", height: "95%" }}
                  initialCenter={{
                    lat: latitude,
                    lng: longitude,
                  }}
                  onClick={mapClicked}
                >
                  {markers.map((position) => {
                    return (
                      <Marker
                        key={position.id}
                        title={"Store Coordinates"}
                        position={{ lat: position.lat, lng: position.lng }}
                      />
                    );
                  })}
                </Map>
              </div>
            </div>
          </div>

          <div>
            <CoordinateList markers={markers} setMarkers={setMarkers} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAZYZi2UV-HeC8EuVtX4VeD0muBykqvtrA",
})(Maps);
