import { FC } from "react";

import "./square.css";

interface ISize {
  size: { width: string; height: string };
}

export const Square: FC<ISize> = ({ size }) => {
  return (
    <div className="square" style={size}>
      2
    </div>
  );
};
