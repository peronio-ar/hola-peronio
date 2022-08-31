import { useEffect, useState } from "react";
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
import "@rainbow-me/rainbowkit/styles.css";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import { connectorsForWallets, getDefaultWallets, wallet, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Wizzard from "./components/Wizzard";
import { scroller, Element } from "react-scroll";
import InjectedWelcome from "./components/InjectedWelcome";
const { chains, provider } = configureChains([chain.polygon], [publicProvider()]);
const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

// const { connectors } = getDefaultWallets({
//     appName: "Peronio App",
//     chains,
// });

const metamaskConnector = new MetaMaskConnector({ chains });

const connectors = connectorsForWallets([
    {
        groupName: "Default",
        wallets: [
            // wallet.rainbow({ chains }),
            wallet.walletConnect({ chains }),
            wallet.metaMask({ chains }),
        ],
    },
]);

const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
});

function App() {
    const [step, setStep] = useState(1);
    const [disableScreen, setDisableScreen] = useState(1);
    const [counter, setCounter] = useState(0);
    const [activeCounter, setActiveCounter] = useState(false);
    const [intervalIdG, setIntervalIdG] = useState(null);
    const [isApple, setIsApple] = useState(false);

    const stepName = {
        1: "welcome",
        2: "downloadApp",
        3: "createWallet",
        4: "activeQr",
        5: "finishWallet",
        6: "readyScreen",
    };

    const handleClickNext = () => {
        if (!activeCounter) setActiveCounter(true);

        if (step === 4 && intervalIdG) clearInterval(intervalIdG);

        scroller.scrollTo(stepName[(step + 1) as keyof typeof stepName], {
            duration: 500,
            smooth: true,
        });

        setStep((prevState) => prevState + 1);
        setTimeout(() => {
            setDisableScreen((prevState) => prevState + 1);
        }, 1000);
    };
    const handleClickBack = () => {
        setDisableScreen((prevState) => prevState - 1);
        setTimeout(() => {
            scroller.scrollTo(stepName[(step - 1) as keyof typeof stepName], {
                duration: 500,
                smooth: true,
            });
            setStep((prevState) => prevState - 1);
        }, 1000);
    };

    useEffect(() => {
        scroller.scrollTo("welcome", {
            duration: 500,
            smooth: true,
        });
    }, []);
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

    const goBack = (step: number) => {
        scroller.scrollTo(stepName[step as keyof typeof stepName], {
            duration: 500,
            smooth: true,
        });
    };

    window.onresize = () => {
        goBack(step);
    };

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider modalSize="compact" chains={chains}>
                <div className="container-app">
                    {disableScreen < 2 &&
                        (window.ethereum && isMobile ? (
                            <InjectedWelcome connector={metamaskConnector} />
                        ) : (
                            <>
                                <Welcome setIsApple={setIsApple} handleClickNext={handleClickNext} />
                                <MobileWelcome handleClickNext={handleClickNext} />
                            </>
                        ))}

                    {disableScreen < 3 && (
                        <>
                            <DownloadAppMobile handleClickBack={handleClickBack} handleClickNext={handleClickNext} />
                            <DownloadApp isApple={isApple} counter={counter} handleClickNext={handleClickNext} />
                        </>
                    )}

                    {disableScreen < 4 && <CreateWallet counter={counter} handleClickNext={handleClickNext} />}

                    {disableScreen < 5 && <ActiveQR isMobile={isMobile} step={step} counter={counter} handleClickNext={handleClickNext} />}

                    {disableScreen < 6 && <FinishWallet counter={counter} handleClickNext={handleClickNext} />}

                    <ReadyScreen />

                    {step > 1 && step < 6 && <Wizzard step={step} />}
                </div>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default App;
