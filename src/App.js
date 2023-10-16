import { useEffect, useState } from "react";
import "./styles.css";
import { MarketTable, Navigation } from "./components";
import fetchData from "./services/apiCall";

export default function App() {
  const [marketData, setMarketData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 7 < marketData.length) {
      setCurrentIndex(currentIndex + 7);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 7 >= 0) {
      setCurrentIndex(currentIndex - 7);
    }
  };

  useEffect(() => {
    fetchData(setMarketData);
  }, []);

  if (marketData.length < 0) {
    return <div>loading...</div>;
  }

  const sevenDaysData = (data) => data.slice(currentIndex, currentIndex + 7);

  return (
    <div className="App">
      <div className="main">
        <div className="title">
          <h1>Market Data</h1>
        </div>

        <Navigation
          handlePrev={handlePrev}
          handleNext={handleNext}
          currentIndex={currentIndex}
          marketData={marketData}
        />

        <MarketTable sevenDaysData={sevenDaysData} marketData={marketData} />
      </div>
    </div>
  );
}
