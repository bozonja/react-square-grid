//styles
import "./App.css";
//components
import { GridItem } from "./components/Field";

function App() {
  const size = {
    sm: "20px",
    md: "35px",
    lg: "50px",
  };
  const errorMessage =
    "Oops...Max amount of cols or rows is 10! Total number of fields must not exceed 99!";
  // "Max amount of cols or rows is 10!
  const numberOfCols = 10;
  const numberOfRows = 10;
  const colsAndRows = Array.from(
    { length: numberOfCols * numberOfRows },
    (_, i) => i
  );

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
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
        className="grid-two"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numberOfCols}, ${size.lg})`,
          gridTemplateRows: `repeat(${numberOfRows},  ${size.lg})`,
        }}
      >
        {colsAndRows.map((item, index) => (
          <GridItem item={item} key={index} />
        ))}
      </div>
      {/* //TODO: change sizes by cliking buttons */}
      <p>Choose field size:</p>
      <button onClick={() => {}}>Sm</button>
      <button onClick={() => {}}>Md</button>
      <button onClick={() => {}}>Lg</button>
    </div>
  );
}

export default App;
