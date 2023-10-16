import { Button } from "../index";

const Navigation = ({ handlePrev, handleNext, currentIndex, marketData }) => {
  return (
    <div className="navigation">
      <Button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        text={"Previous"}
        className={"navigation-btn"}
      />
      <Button
        onClick={handleNext}
        disabled={currentIndex + 7 >= marketData.length}
        text={"Next"}
        className={"navigation-btn"}
      />
    </div>
  );
};

export default Navigation;
