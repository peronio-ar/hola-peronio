import activeQRfondo from "../assets/images/ActiveQR/ActiveQRFondo.svg";
import createWalletBarraVertical from "../assets/images/Captures/Capture2Screen4.svg";

import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.svg";
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.svg";
import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
import Counter from "./Counter";
import {useEffect} from "react";
import {ConnectButton} from "@rainbow-me/rainbowkit";

export default function Configure({handleClickNext, counter}: any) {
  return (
    <div className="ActiveQRBackground">
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
              if (account) handleClickNext();
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

      <div className="contentBarra">
        <img src={downloadCar2} alt="downloadCar2" className="downloadCar4" />
        <div className="ContentInnerBara2">.</div>

        <div className="circleOfBarra">
          <div className="FinishWalletCircleBlack">.</div>
          <div className="FinishWalletCircleBlack">.</div>
          <div className="FinishWalletCircleBlack">.</div>
          <img src={downloadIcon} alt="downloadIcon" />
        </div>
      </div>
    </div>
  );
}
