import { useRef } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focusInput();
  };

  return (
    <div className="App">
      <button onClick={focusInput}>Focus</button>

      <Input ref={inputRef} />
    </div>
  );
}

export default App;
