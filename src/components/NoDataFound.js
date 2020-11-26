// const { GiDivergence } = require("react-icons/gi");

const NoDataFound = (props) => {
  const handleNoDataClick = (e) => {
    props.setNoData(false);
  };
  return (
    <div className="no-data">
      <button className="no-data-btn" onClick={handleNoDataClick}>
        x
      </button>
      No {props.noDataType} data to report at this current time.
    </div>
  );
};

export default NoDataFound;
