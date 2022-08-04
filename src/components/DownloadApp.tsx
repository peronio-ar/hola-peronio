import React from "react";
import DownloadAppFondo from "../assets/images/ImagesDownloadApp/DownloadAppFondo.png";
import LogoPeronioWhite from "../assets/images/ImagesDownloadApp/LogoPeronioWhite.png";
import DownloadReloj from "../assets/images/ImagesDownloadApp/DownloadReloj.png";
import DownloadBarcode from "../assets/images/ImagesDownloadApp/DownloadBarcode.png";
import downloadButton from "../assets/images/ImagesDownloadApp/downloadButton.png";
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.png";
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.png";
export default function DownloadApp() {
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
        <img src={DownloadReloj} alt="DownloadReloj" className="navIconReloj" />
      </div>
      <div className="DownloadContent">
        <img
          src={DownloadBarcode}
          alt="DownloadBarcode"
          className="DownloadBarcode"
        />

        <img
          src={downloadButton}
          alt="downloadButton"
          className="downloadButton"
        />
      </div>

      <div className="contentBarra">
        <img src={downloadCar2} alt="downloadCar2" className="downloadCar2" />
        <div className="ContentInnerBara">.</div>

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

        <p className="downloadText">"!perdon,perdon,gran conductor!..."</p>
      </div>
    </div>
  );
}
