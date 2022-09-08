import ReactPlayer from "react-player";

import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
import activeQRfondo from "../assets/images/ActiveQR/ActiveQRFondo2.svg";
import capture2Video from "../assets/images/Captures/alphawallet-tutorial2.mp4";
import capture2BisVideo from "../assets/images/Captures/alphawallet-tutorial2-bis.mp4";
import walletConnectIcon from "../assets/images/wallet-connect.png";
import Counter from "./Counter";

import { useState } from "react";
import { Element } from "react-scroll";
import { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Configure({ isMobile, step, handleClickNext, counter }: any) {
    const [activeButton, setActiveButton] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);

    useEffect(() => {
        setPlayVideo(true);
    }, []);
    const [captureVideoUrl, setCaptureVideoUrl] = useState(capture2Video);

    return (
        <Element name="activeQr" className="ActiveQRBackground">
            <img src={activeQRfondo} alt="activeQRfondo" className="activeQRfondo" />

            <img src={LogoPeronio} alt="createLogoPeronio" className="createLogoPeronio" />

            <div className="playerDiv">
                <ReactPlayer width="590" height="425" muted={true} playing={playVideo} loop={true} url={captureVideoUrl} />
            </div>

            <div className="activeQRTime">
                <Counter activeBlack counterNumber={counter} />
            </div>

            <div className="activeQRContent">
                <div className="activeQRBarra">
                    <p className="activeQRContenText">EN LA APP</p>
                </div>
                <p className="activeQRContentParraf">
                    {isMobile ? (
                        <ul className="activeQRContentMobile">
                            <li>Hacé click en Conectar</li>
                            <li>Elegí Wallet Connect</li>
                            <li>Seleccioná AlphaWallet como Billetera</li>
                            <li>Volvé acá</li>
                        </ul>
                    ) : (
                        <span>
                            Activá el escaner de QR y <br /> hacé click en Conectar
                            <span className="walletConnectIcon">
                                <img src={walletConnectIcon} />
                                <span>Wallet connect</span>
                            </span>
                        </span>
                    )}
                </p>

                <ConnectButton.Custom>
                    {({ openConnectModal, account, openAccountModal, connectModalOpen }) => {
                        useEffect(() => {
                            if (account && step === 4 && activeButton) handleClickNext();
                        }, [account]);

                        useEffect(() => {
                            setCaptureVideoUrl(connectModalOpen ? capture2BisVideo : capture2Video);
                        }, [connectModalOpen]);

                        return (
                            <>
                                {account ? (
                                    <>
                                        <button onClick={handleClickNext} className="contentButtonQr">
                                            CONTINUAR
                                        </button>
                                        <button className="contentButtonQrText" onClick={openAccountModal}>
                                            Wallet conectada, haz click para desconectar
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => {
                                            openConnectModal();
                                        }}
                                        className="contentButtonQr"
                                    >
                                        CONECTAR
                                    </button>
                                )}
                            </>
                        );
                    }}
                </ConnectButton.Custom>
            </div>
        </Element>
    );
}
