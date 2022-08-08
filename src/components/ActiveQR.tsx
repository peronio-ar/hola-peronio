import activeQRfondo from "../assets/images/ActiveQR/activeQRfondo.png";
import createWalletBarraVertical from "../assets/images/ActiveQR/createWalletBarraVertical.png";
import activeQRBarra from "../assets/images/ActiveQR/activeQRBarra.png";
import ActiveQRButton from "../assets/images/ActiveQR/ActiveQRButton.png";
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.png";
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.png";
import Counter from "./Counter";

import {ConnectButton} from "@rainbow-me/rainbowkit";

export default function Configure({handleClickNext, counter}: any) {
  return (
    <div className="ActiveQRBackground">
      <img src={activeQRfondo} alt="activeQRfondo" className="activeQRfondo" />
      <img
        src={createWalletBarraVertical}
        alt="createWalletBarraVertical"
        className="createWalletBarraVertical"
      />

      <div className="activeQRTime">
        <Counter activeBlack counterNumber={counter} />
      </div>

      <div className="activeQRContent">
        <p className="activeQRContenText">EN LA APP</p>
        <img
          src={activeQRBarra}
          alt="activeQRBarra"
          className="activeQRBarra"
        />
        <p className="activeQRContentParraf">
          Activá el escaner de QR y hacé click en Conectar
        </p>
        <ConnectButton />
        <ConnectButton.Custom>
          {({openConnectModal, account}) => {
            return (
              <>
                {account ? (
                  <img
                    onClick={handleClickNext}
                    src={ActiveQRButton}
                    alt="ActiveQRButton"
                    className="ActiveQRButton"
                  />
                ) : (
                  <img
                    onClick={async () => {
                      await openConnectModal();
                      handleClickNext;
                    }}
                    src={ActiveQRButton}
                    alt="ActiveQRButton"
                    className="ActiveQRButton"
                  />
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
          <div className="downloadCircleBlack">.</div>
          <div className="downloadCircleBlack">.</div>
          <div className="downloadCircleBlack">.</div>
          <img src={downloadIcon} alt="downloadIcon" />
        </div>
      </div>
    </div>
  );
}
