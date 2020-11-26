// const { GiDivergence } = require("react-icons/gi");

const NoDataFound = (props) => {
  console.log("no data", props);
  return (
    <div className="no-data">
      No {props.noDataType} data found at this current time.
    </div>
  );
};

export default NoDataFound;
