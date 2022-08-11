import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import DownloadApp from "./components/DownloadApp";
import CreateWallet from "./components/CreateWallet";
import ActiveQR from "./components/ActiveQR";
import FinishWallet from "./components/FinishWallet";
import ReadyScreen from "./components/ReadyScreen";
import MobileWelcome from "./components/MobileWelcome";
import DownloadAppMobile from "./components/DownloadAppMobile";
import {Buffer} from "buffer";
import "@rainbow-me/rainbowkit/styles.css";

import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {chain, configureChains, createClient, WagmiConfig} from "wagmi";
import {alchemyProvider} from "wagmi/providers/alchemy";
import {publicProvider} from "wagmi/providers/public";

const {chains, provider} = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()]
);

const {connectors} = getDefaultWallets({
  appName: "Peronio App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const [activeCounter, setActiveCounter] = useState(false);
  const [intervalIdG, setIntervalIdG] = useState(null);
  const [isApple, setIsApple] = useState(false);

  const handleClickNext = () => {
    if (!activeCounter) setActiveCounter(true);

    if (step === 4 && intervalIdG) clearInterval(intervalIdG);
    setStep((prevState) => prevState + 1);
  };
  const handleClickBack = () => {
    setStep((prevState) => prevState - 1);
  };
  useEffect(() => {
    let intervalId: any;
    if (activeCounter) {
      let tempCounter = 0;
      intervalId = setInterval(() => {
        tempCounter += 1;
        if (tempCounter <= 60) setCounter(tempCounter);
        else clearInterval(intervalId);
      }, 1000);

      setIntervalIdG(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeCounter]);

  console.log(step);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="App">
          {step === 1 && (
            <>
              <Welcome
                setIsApple={setIsApple}
                handleClickNext={handleClickNext}
              />
              <MobileWelcome handleClickNext={handleClickNext} />
            </>
          )}

          {step === 2 && (
            <>
              <DownloadApp
                isApple={isApple}
                counter={counter}
                handleClickNext={handleClickNext}
              />
              <DownloadAppMobile
                handleClickBack={handleClickBack}
                handleClickNext={handleClickNext}
              />
            </>
          )}

          {step === 3 && (
            <CreateWallet counter={counter} handleClickNext={handleClickNext} />
          )}

          {step === 4 && (
            <ActiveQR counter={counter} handleClickNext={handleClickNext} />
          )}
          {step === 5 && (
            <FinishWallet counter={counter} handleClickNext={handleClickNext} />
          )}
          {step === 6 && <ReadyScreen />}
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
