import activeQRfondo from "../assets/images/ActiveQR/ActiveQRFondo2.svg";
import capture2 from "../assets/images/Captures/capture2.gif";
import { useState } from "react";
import { Element } from "react-scroll";
import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
import Counter from "./Counter";
import { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import walletConnectIcon from "../assets/images/wallet-connect.png";

export default function Configure({ isMobile, step, handleClickNext, counter }: any) {
    const [activeButton, setActiveButton] = useState(false);
    return (
        <Element name="activeQr" className="ActiveQRBackground">
            <img src={activeQRfondo} alt="activeQRfondo" className="activeQRfondo" />

            <img src={LogoPeronio} alt="createLogoPeronio" className="createLogoPeronio" />

            <img src={capture2} alt="createWalletBarraVertical" className="createWalletBarraVertical" />

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
                            <div className="walletConnectIcon">
                                <img src={walletConnectIcon} />
                                <div>Wallet connect</div>
                            </div>
                        </span>
                    )}
                </p>

                <ConnectButton.Custom>
                    {({ openConnectModal, account, openAccountModal }) => {
                        useEffect(() => {
                            if (account && step === 4 && activeButton) handleClickNext();
                        }, [account]);
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
                                            setActiveButton(true);
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
