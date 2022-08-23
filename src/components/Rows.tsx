import { useState } from "react";
//css
import "../App.css";

interface ISize {
  size: string;
  numberOfColsAndRows: number;
}

export const Rows = ({ size, numberOfColsAndRows }: ISize) => {
  const [pinkBgColor, setPinkBgColor] = useState(false);
  const [randomNumber, setRandomNumber] = useState<any>(false);

  const changeRandomNumber = () => {
    return Math.floor(Math.random() * numberOfColsAndRows) + 1;
  };

  return (
    <div
      className="row"
      style={{
        backgroundColor: pinkBgColor ? "pink" : "grey",
        minWidth: size,
        minHeight: size,
      }}
      onClick={() => {
        setPinkBgColor(!pinkBgColor);
        setRandomNumber(randomNumber ? null : changeRandomNumber());
      }}
    >
      {randomNumber}
    </div>
  );
};
