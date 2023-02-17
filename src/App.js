import { useState } from "react";
import styles from "./index.css";
import pic from "./yaruk.jpg";
function App() {
  const [isShown, setIsShown] = useState(false);

  const toggleShown = () => {
    setIsShown((prevShown) => !prevShown);
  };

  return (
    <div className="App">
      {isShown && <img src={pic} alt="Yaruk" />}
      <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Yaruk</button>
    </div>
  );
}

export default App;
