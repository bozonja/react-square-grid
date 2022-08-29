import { useState } from "react";
//styles
import "../App.css";

type FieldProps = {
  item: number;
};

export const GridItem = ({ item }: FieldProps) => {
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
