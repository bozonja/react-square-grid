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
  const colsAndRows = new Array(numberOfCols * numberOfCols).fill(null);

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

  // Vrijednosti u poljima se ne smiju ponavljati.
  // const ranNo = Math.floor(Math.random() * 99) + 1;

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
        {colsAndRows.map((_, index) => (
          <GridItem index={index} key={index} />
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
