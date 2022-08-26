import { useState } from "react";
//styles
import "../App.css";

export const GridItem = ({ item }: any) => {
  const [pinkBgColor, setPinkBgColor] = useState(false);
  const [showRandomNumber, setShowRandomNumber] = useState(false);

  return (
    <div
      className="grid-item"
      style={{ backgroundColor: pinkBgColor ? "pink" : "grey" }}
      onClick={() => {
        setPinkBgColor(!pinkBgColor);
        setShowRandomNumber(!showRandomNumber);
      }}
    >
      {showRandomNumber && item}
    </div>
  );
};
