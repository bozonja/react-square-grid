import "./App.css";
//components
import { Rows } from "./components/Rows";

function App() {
  const size = {
    sm: "20px",
    md: "35px",
    lg: "50px",
  };

  // "Max amount of cols or rows is 10!
  const numberOfCols = 10;
  const numberOfRows = 10;
  const numberOfColsAndRows = numberOfCols * numberOfRows;

  const cols = new Array(numberOfCols).fill(0);
  const rows = new Array(numberOfRows).fill(0);

  if (numberOfCols > 10 || numberOfRows > 10) {
    throw new Error(
      "Max amount of cols or rows is 10! Total number of squares must not exceed 99!"
    );
  }

  return (
    <div>
      <div className="grid">
        {cols.map((_, i) => (
          <div key={i}>
            {rows.map((_, i) => (
              <Rows
                key={i}
                size={size.md}
                numberOfColsAndRows={numberOfColsAndRows}
              />
            ))}
          </div>
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
