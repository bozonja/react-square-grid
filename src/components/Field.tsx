import { useState } from "react";
import "../App.css";

export const GridItem = ({ index }: any) => {
  const [pinkBgColor, setPinkBgColor] = useState(false);
  return (
    <div
      className="grid-item"
      style={{ backgroundColor: pinkBgColor ? "pink" : "grey" }}
      onClick={() => setPinkBgColor(!pinkBgColor)}
    >
      {index}
    </div>
  );
};
