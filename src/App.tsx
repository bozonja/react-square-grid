import { useState } from "react";

//styles
import "./App.css";
//components
import { GridItem } from "./components/Field";

function App() {
  const errorMessage =
    "Oops...Max amount of cols or rows is 10! Total number of fields must not exceed 99!";
  // "Max amount of cols or rows is 10!
  const numberOfCols = 10;
  const numberOfRows = 10;
  const colsAndRows = Array.from(
    { length: numberOfCols * numberOfRows },
    (_, i) => i
  );

  const [fieldSize, setFieldSize] = useState("20px");

  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temporary = array[i];
      array[i] = array[j];
      array[j] = temporary;
    }
  };

  shuffleArray(colsAndRows);

  const checkNoOfCols = () => {
    if (numberOfCols > 10 || numberOfRows > 10) {
      throw new Error(errorMessage);
    }
  };

  try {
    checkNoOfCols();
  } catch (e) {
    return <h3 style={{ color: "red" }}>{errorMessage}</h3>;
  }

  return (
    <div>
      <p>Click on the field to get a random number:</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numberOfCols}, ${fieldSize})`,
          gridTemplateRows: `repeat(${numberOfRows},  ${fieldSize})`,
        }}
      >
        {colsAndRows.map((item, index) => (
          <GridItem item={item} key={index} />
        ))}
      </div>
      <p>Choose field size:</p>
      <button onClick={() => setFieldSize("20px")}>Sm</button>
      <button onClick={() => setFieldSize("35px")}>Md</button>
      <button onClick={() => setFieldSize("50px")}>Lg</button>
    </div>
  );
}

export default App;
