import "./App.css";
import { Square } from "./components/Square/Square";

function App() {
  const size = {
    sm: {
      width: "20px",
      height: "20px",
    },
    lg: {
      width: "50px",
      height: "50px",
    },
  };

  return (
    <div className="App">
      <Square size={size.sm} />
    </div>
  );
}

export default App;
