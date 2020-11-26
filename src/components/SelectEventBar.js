import { useState, useEffect } from "react";
import Map from "./Map";
import Loader from "./Loader";
import NoDataFound from "./NoDataFound";

const SelectEventBar = () => {
  const [volcano, setVolcano] = useState(false);
  const [wildfire, setWildfire] = useState(true);
  const [earthquake, setEarthquake] = useState(false);
  const [flood, setFlood] = useState(false);
  const [storm, setStorm] = useState(false);
  const [dust, setDust] = useState(false);
  const [eventData, setEventData] = useState([]);

  const [foundDust, setFoundDust] = useState(null);
  const [foundWildfire, setFoundWildfire] = useState(null);
  const [foundStorm, setFoundStorm] = useState(null);
  const [foundVolcano, setFoundVolcano] = useState(null);
  const [foundFlood, setFoundFlood] = useState(null);
  const [foundEarthquake, setFoundEarthquake] = useState(null);
  const [noData, setNoData] = useState(false);
  const [noDataType, setNoDataType] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);

      const findDust = (element) => element.categories[0].id === 7;
      const confirmDust = events.findIndex(findDust);
      setFoundDust(confirmDust);

      const findWildfire = (element) => element.categories[0].id === 8;
      const confirmWildfire = events.findIndex(findWildfire);
      setFoundWildfire(confirmWildfire);

      const findStorm = (element) => element.categories[0].id === 10;
      const confirmStorm = events.findIndex(findStorm);
      setFoundStorm(confirmStorm);

      const findVolcano = (element) => element.categories[0].id === 12;
      const confirmVolcano = events.findIndex(findVolcano);
      setFoundVolcano(confirmVolcano);

      const findFlood = (element) => element.categories[0].id === 14;
      const confirmFlood = events.findIndex(findFlood);
      setFoundFlood(confirmFlood);

      const findEarthquake = (element) => element.categories[0].id === 16;
      const confirmEarthquake = events.findIndex(findEarthquake);
      setFoundEarthquake(confirmEarthquake);
    };
    fetchEvents();
  }, []);

  const handleClick = (e) => {
    const val = e.target.value;
    if (val === "Volcano") {
      setVolcano(!volcano);
      if (foundVolcano !== -1) {
        return <Map eventData={eventData} volcano={volcano} />;
      } else {
        if (volcano) {
          setNoData(false);
        } else {
          setNoDataType("volcano");
          setNoData(true);
        }
      }
    }

    if (val === "Wildfire") {
      setWildfire(!wildfire);
      if (foundWildfire !== -1) {
        return <Map eventData={eventData} wildfire={wildfire} />;
      } else {
        if (wildfire) {
          setNoData(false);
        } else {
          setNoDataType("wildfire");
          setNoData(true);
        }
      }
    }

    if (val === "Earthquake") {
      setEarthquake(!earthquake);
      if (foundEarthquake !== -1) {
        return <Map eventData={eventData} earthquake={earthquake} />;
      } else {
        if (earthquake) {
          setNoData(false);
        } else {
          setNoDataType("earthquake");
          setNoData(true);
        }
      }
    }

    if (val === "Flood") {
      setFlood(!flood);
      if (foundFlood !== -1) {
        return <Map eventData={eventData} flood={flood} />;
      } else {
        if (flood) {
          setNoData(false);
        } else {
          setNoDataType("flood");
          setNoData(true);
        }
      }
    }

    if (val === "Storm") {
      setStorm(!storm);
      if (foundStorm !== -1) {
        return <Map eventData={eventData} storm={storm} />;
      } else {
        if (storm) {
          setNoData(false);
        } else {
          setNoDataType("severe storm");
          setNoData(true);
        }
      }
    }

    if (val === "Dust") {
      setDust(!dust);
      if (foundDust !== -1) {
        return <Map eventData={eventData} dust={dust} />;
      } else {
        if (dust) {
          setNoData(false);
        } else {
          setNoDataType("dust and haze");
          setNoData(true);
        }
      }
    }
  };

  return (
    <>
      {!loading ? (
        <Map
          eventData={eventData}
          volcano={volcano}
          wildfire={wildfire}
          earthquake={earthquake}
          flood={flood}
          storm={storm}
          dust={dust}
          noData={noData}
          setNoData={setNoData}
        />
      ) : (
        <Loader />
      )}
      {noData && <NoDataFound noDataType={noDataType} setNoData={setNoData} />}
      <div className="select-events-container">
        <h2>Select a category:</h2>

        <div className="select-labels-wrapper">
          <label>
            <input
              type="checkbox"
              id="12"
              name="volcano"
              value="Volcano"
              onClick={handleClick}
            />{" "}
            Volcano
          </label>
          <label>
            <input
              type="checkbox"
              id="8"
              name="wildfire"
              value="Wildfire"
              defaultChecked
              onClick={handleClick}
            />{" "}
            Wildfire
          </label>
          <label>
            <input
              type="checkbox"
              id="16"
              name="earthquake"
              value="Earthquake"
              onClick={handleClick}
            />{" "}
            Earthquake
          </label>
          <label>
            <input
              type="checkbox"
              id="14"
              name="flood"
              value="Flood"
              onClick={handleClick}
            />{" "}
            Flood
          </label>
          <label>
            <input
              type="checkbox"
              id="10"
              name="storm"
              value="Storm"
              onClick={handleClick}
            />{" "}
            Severe Storm
          </label>
          <label>
            <input
              type="checkbox"
              id="12"
              name="dust"
              value="Dust"
              onClick={handleClick}
            />{" "}
            Dust and Haze
          </label>
        </div>
      </div>
    </>
  );
};

export default SelectEventBar;
