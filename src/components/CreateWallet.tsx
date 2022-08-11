import React from "react";
import CreateWalletFondo from "../assets/images/CreateWallet/CreateWalletFondo.svg";
import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
import createWalletBarra from "../assets/images/Captures/Capture1Screen3.svg";

import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.svg";
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.svg";

import Counter from "./Counter";

export default function CreateWallet({handleClickNext, counter}: any) {
  return (
    <div className="createWalletBackground">
      <img
        src={CreateWalletFondo}
        alt="CreateWalletFondo"
        className="CreateWalletFondo"
      />

      <img
        src={LogoPeronio}
        alt="createLogoPeronio"
        className="createLogoPeronio"
      />

      <div className="createWalletContainer">
        <div className="createWalletTime">
          <Counter counterNumber={counter} />
        </div>

        <img
          src={createWalletBarra}
          alt="createWalletBarra"
          className="createWalletBarra"
        />
      </div>

      <div className="ContainerButtons">
        <p className="contentButtonText">Abri la aplicacion y toca</p>
        <button className="contentButtonTextCapture">
          CREAR NUEVO MONEDERO
        </button>
      </div>

      <div onClick={handleClickNext} className="contentButton">
        LISTO
      </div>

      <div className="contentBarra">
        <img src={downloadCar2} alt="downloadCar2" className="downloadCar3" />
        <div className="ContentInnerBara">.</div>

        <div className="circleOfBarra">
          <div className="FinishWalletCircleBlack">.</div>
          <div className="FinishWalletCircleBlack">.</div>
          <img src={downloadIcon} alt="downloadIcon" />
          <img src={downloadIcon} alt="downloadIcon" />
        </div>
      </div>
    </div>
  );
}
