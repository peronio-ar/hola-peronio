import {useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import DownloadApp from "./components/DownloadApp";
import CreateWallet from "./components/CreateWallet";
import ActiveQR from "./components/ActiveQR";
import FinishWallet from "./components/FinishWallet";
import ReadyScreen from "./components/ReadyScreen";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Welcome /> */}
      {/* <DownloadApp /> */}
      {/* <CreateWallet /> */}
      {/* <ActiveQR /> */}
      {/* <FinishWallet /> */}
      <ReadyScreen />
    </div>
  );
}

export default App;
