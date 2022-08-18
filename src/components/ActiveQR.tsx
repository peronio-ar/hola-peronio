import activeQRfondo from "../assets/images/ActiveQR/ActiveQRFondo2.svg";
import createWalletBarraVertical from "../assets/images/Captures/Capture2Screen4.svg";

import {Element} from "react-scroll";
import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
import Counter from "./Counter";
import {useEffect} from "react";
import {ConnectButton} from "@rainbow-me/rainbowkit";

export default function Configure({step, handleClickNext, counter}: any) {
  return (
    <Element name="activeQr" className="ActiveQRBackground">
      <img src={activeQRfondo} alt="activeQRfondo" className="activeQRfondo" />

      <img
        src={LogoPeronio}
        alt="createLogoPeronio"
        className="createLogoPeronio"
      />

      <img
        src={createWalletBarraVertical}
        alt="createWalletBarraVertical"
        className="createWalletBarraVertical"
      />

      <div className="activeQRTime">
        <Counter activeBlack counterNumber={counter} />
      </div>

      <div className="activeQRContent">
        <div className="activeQRBarra">
          <p className="activeQRContenText">EN LA APP</p>
        </div>

        <p className="activeQRContentParraf">
          Activá el escaner de QR y <br /> hacé click en Conectar
        </p>
        <ConnectButton.Custom>
          {({openConnectModal, account}) => {
            useEffect(() => {
              if (account && step === 4) handleClickNext();
            }, [account]);
            return (
              <>
                {account ? (
                  <button onClick={handleClickNext} className="contentButtonQr">
                    CONFIGURAR
                  </button>
                ) : (
                  <button
                    onClick={openConnectModal}
                    className="contentButtonQr"
                  >
                    CONFIGURAR
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
