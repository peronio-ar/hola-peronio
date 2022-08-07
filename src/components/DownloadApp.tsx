import React from "react";
import DownloadAppFondo from "../assets/images/ImagesDownloadApp/DownloadAppFondo.png";
import LogoPeronioWhite from "../assets/images/ImagesDownloadApp/LogoPeronioWhite.png";
import DownloadReloj from "../assets/images/ImagesDownloadApp/DownloadReloj.png";
import DownloadBarcode from "../assets/images/ImagesDownloadApp/DownloadBarcode.png";
import downloadButton from "../assets/images/ImagesDownloadApp/downloadButton.png";
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.png";
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.png";
import qrApple from "../assets/images/ImagesDownloadApp/qrApple.svg";
import qrPlayStore from "../assets/images/ImagesDownloadApp/qrPlayStore.svg";
import Counter from "./Counter";
export default function DownloadApp({handleClickNext, counter, isApple}: any) {
  return (
    <div className="DownloadAppBackgorund">
      <img
        src={DownloadAppFondo}
        alt="DownloadAppFondo"
        className="DownloadAppFondo"
      />

      <div className="downloadContainer">
        <img
          src={LogoPeronioWhite}
          alt="LogoPeronioWhite"
          className="navIconLogo"
        />
        <div className="navIconReloj">
          <Counter counterNumber={counter} />
        </div>
      </div>
      <div className="DownloadContent">
        <img
          src={isApple ? qrApple : qrPlayStore}
          alt="DownloadBarcode"
          className="DownloadBarcodeQr"
        />
        <img
          src={DownloadBarcode}
          alt="DownloadBarcode"
          className="DownloadBarcode"
        />

        <img
          onClick={handleClickNext}
          src={downloadButton}
          alt="downloadButton"
          className="downloadButton"
        />
      </div>

      <div className="contentBarra">
        <img src={downloadCar2} alt="downloadCar2" className="downloadCar2" />
        {/* <div className="ContentInnerBara">.</div> */}

        <div className="circleOfBarra">
          <div className="FinishWalletCircleBlack">.</div>
          {/*  <div className='downloadCircle'> */}
          <img src={downloadIcon} alt="downloadIcon" />
          {/* </div> */}
          {/*  <div className='downloadCircle'> */}
          <img src={downloadIcon} alt="downloadIcon" />
          {/* </div> */}
          {/* <div className='downloadCircle'> */}
          <img src={downloadIcon} alt="downloadIcon" />
          {/* </div> */}
        </div>

        <p className="downloadText">"!Peron, Peron, gran conductor! ..."</p>
      </div>
    </div>
  );
}
