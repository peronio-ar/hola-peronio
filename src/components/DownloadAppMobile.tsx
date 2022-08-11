import React from "react";
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.svg";
import backgroundWelcome from "../assets/images/ImagesWelcome/backgroundWelcomeMobile.svg";
import FondoDowloadAppMobile from "../assets/images/DownloadAppMobile/FondoDowloadAppMobile.png";
import ButtonDownloadApp from "../assets/images/DownloadAppMobile/ButtonDownloadApp.png";

export default function DownloadAppMobile({
  handleClickBack,
  handleClickNext,
}: any) {
  return (
    <div className="mobileWelcomeContainer mobileWelcome">
      <img
        src={backgroundWelcome}
        alt="backgroundWelcome"
        className="backgroundImageMobile"
      />
      <div className="containerMobile">
        <img
          src={logoPeronio}
          alt="logoPeronio"
          className="logoPeronioMobile"
        />
      </div>

      <div className="contentMobileDownload">
        <p className="titleContentDowloadMobile">Ya lo Descargaste</p>
        <div className="containerButtonsDownload">
          <p onClick={handleClickNext} className="buttonAnswer-SI">
            SI
          </p>
          <p onClick={handleClickBack} className="buttonAnswer-NO">
            NO
          </p>
        </div>
      </div>

      {/*  <div className="contentDownloadAppMobile">
      
        <img
          src={ButtonDownloadApp}
          alt="ButtonDownloadApp"
          className="ButtonDownloadApp"
        />
        <div className="textButtonContent">
          
        </div>
      </div> */}
    </div>
  );
}
