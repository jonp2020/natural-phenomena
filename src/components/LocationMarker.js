import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import { GiSmokingVolcano } from "react-icons/gi";
import { GiFlood } from "react-icons/gi";
import { WiEarthquake } from "react-icons/wi";
import { GiLightningStorm } from "react-icons/gi";
import { WiDust } from "react-icons/wi";

const LocationMarker = ({ lat, lng, onClick, typeofEvent }) => {
  if (typeofEvent === "wildfire") {
    return (
      <div className="location-marker" onClick={onClick}>
        <Icon icon={locationIcon} className="location-icon" />
      </div>
    );
  }
  if (typeofEvent === "volcano") {
    return (
      <div className="location-marker" onClick={onClick}>
        <GiSmokingVolcano className="location-icon volcano" />
      </div>
    );
  }

  if (typeofEvent === "flood") {
    return (
      <div className="location-marker" onClick={onClick}>
        <GiFlood className="location-icon flood" />
      </div>
    );
  }

  if (typeofEvent === "earthquake") {
    return (
      <div className="location-marker" onClick={onClick}>
        <WiEarthquake className="location-icon earthquake" />
      </div>
    );
  }

  if (typeofEvent === "storm") {
    return (
      <div className="location-marker" onClick={onClick}>
        <GiLightningStorm className="location-icon storm" />
      </div>
    );
  }
  if (typeofEvent === "dust") {
    return (
      <div className="location-marker" onClick={onClick}>
        <WiDust className="location-icon dust" />
      </div>
    );
  }
};

export default LocationMarker;
