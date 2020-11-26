import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import NoDataFound from "./NoDataFound";

const Map = ({
  eventData,
  center,
  zoom,
  volcano,
  wildfire,
  earthquake,
  flood,
  storm,
  dust,
}) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (volcano) {
      if (ev.categories[0].id === 12) {
        if (ev.geometries[0].coordinates.length === 1) {
          return (
            <LocationMarker
              lat={ev.geometries[0].coordinates[0][0][1]}
              lng={ev.geometries[0].coordinates[0][0][0]}
              key={ev.id}
              typeofEvent={"volcano"}
              onClick={() =>
                setLocationInfo({
                  id: ev.id,
                  title: ev.title,
                  lat: ev.geometries[0].coordinates[0][0][1],
                  lng: ev.geometries[0].coordinates[0][0][0],
                })
              }
            />
          );
        } else if (ev.geometries[0].coordinates.length === 2) {
          return (
            <LocationMarker
              lat={ev.geometries[0].coordinates[1]}
              lng={ev.geometries[0].coordinates[0]}
              key={ev.id}
              typeofEvent={"volcano"}
              onClick={() =>
                setLocationInfo({
                  id: ev.id,
                  title: ev.title,
                  lat: ev.geometries[0].coordinates[1],
                  lng: ev.geometries[0].coordinates[0],
                })
              }
            />
          );
        }
      }
    }

    if (wildfire) {
      if (ev.categories[0].id === 8) {
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            key={ev.id}
            typeofEvent={"wildfire"}
            onClick={() =>
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                lat: ev.geometries[0].coordinates[1],
                lng: ev.geometries[0].coordinates[0],
              })
            }
          />
        );
      }
    }

    if (earthquake) {
      if (ev.categories[0].id === 16) {
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            key={ev.id}
            typeofEvent={"earthquake"}
            onClick={() =>
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                lat: ev.geometries[0].coordinates[1],
                lng: ev.geometries[0].coordinates[0],
              })
            }
          />
        );
      }
    }

    if (flood) {
      if (ev.categories[0].id === 14) {
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            key={ev.id}
            typeofEvent={"flood"}
            onClick={() =>
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                lat: ev.geometries[0].coordinates[1],
                lng: ev.geometries[0].coordinates[0],
              })
            }
          />
        );
      }
    }

    if (storm) {
      if (ev.categories[0].id === 10) {
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            key={ev.id}
            typeofEvent={"storm"}
            onClick={() =>
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                lat: ev.geometries[0].coordinates[1],
                lng: ev.geometries[0].coordinates[0],
              })
            }
          />
        );
      }
    }

    if (dust) {
      if (ev.categories[0].id === 7) {
        console.log("here in dust");
        return (
          <LocationMarker
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            key={ev.id}
            typeofEvent={"dust"}
            onClick={() =>
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                lat: ev.geometries[0].coordinates[1],
                lng: ev.geometries[0].coordinates[0],
              })
            }
          />
        );
      }
    }

    return null;
  });

  const handleClick = (e) => {
    if (locationInfo !== null) {
      setLocationInfo(null);
    }
  };

  return (
    <>
      <div className="map" onClick={handleClick}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP}` }}
          defaultCenter={center}
          defaultZoom={0}
        >
          {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} />}
      </div>
    </>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 0,
};

export default Map;
