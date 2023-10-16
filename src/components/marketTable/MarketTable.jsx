import { dateFormat } from "../../helper";

const MarketTable = ({ sevenDaysData, marketData }) => {
  const determineTextColor = (data, previousData) => {
    if (!previousData) {
      return "black";
    }
    if (data.open > previousData.close) {
      return "green";
    } else if (data.open < previousData.close) {
      return "red";
    } else if (data.open === data.close) {
      return "black";
    } else if (data.open < data.close) {
      return "green";
    } else {
      return "red";
    }
  };
  return (
    <table className="market-table">
      <thead>
        <tr className="market-table-head">
          <th className="col col-1">Date</th>
          <th className="col col-2">Opening Price</th>
          <th className="col col-3">Closing Price</th>
        </tr>
      </thead>
      <tbody className="data-body">
        {sevenDaysData(marketData).map((item, index) => {
          const textColor = determineTextColor(item, marketData);
          return (
            <tr key={index} className="data-row">
              <td className="col col-1"> {dateFormat(item.date)}</td>
              <td className="col col-2" style={{ color: textColor }}>
                {item.open.toFixed(1)}
              </td>
              <td className="col col-3" style={{ color: textColor }}>
                {item.close.toFixed(1)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MarketTable;
