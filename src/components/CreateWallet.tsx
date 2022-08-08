import React from "react";
import CreateWalletFondo from "../assets/images/CreateWallet/CreateWalletFondo.png";
import createWalletTime from "../assets/images/CreateWallet/createWalletTime.png";
import createWalletBarra from "../assets/images/Captures/Capture1Screen3.png";
import createWalletCartel from "../assets/images/CreateWallet/createWalletCartel.png";
import createWalletBUTTONS from "../assets/images/CreateWallet/createWalletBUTTONS.png";
import createWalletButton from "../assets/images/CreateWallet/createWalletButton.png";
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.png";
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.png";
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
        onClick={handleClickNext}
        src={createWalletButton}
        alt="createWalletButton"
        className="createWalletButton"
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

      <div className="contentButton">
        <img
          src={createWalletCartel}
          alt="createWalletCartel"
          className="createWalletCartel"
        />
        <p className="contentButtonText">Abri la aplicacion y toca</p>
        <img
          src={createWalletBUTTONS}
          alt="createWalletBUTTONS"
          className="createWalletBUTTONS"
        />
      </div>

      <div className="contentBarra">
        <img src={downloadCar2} alt="downloadCar2" className="downloadCar3" />
        <div className="ContentInnerBara">.</div>

        <div className="circleOfBarra">
          <div className="downloadCircleBlack">.</div>
          {/*  <div className='downloadCircle'> */}
          <div className="downloadCircleBlack">.</div>
          {/*   <img src={downloadIcon} alt="downloadIcon" /> */}
          {/* </div> */}
          {/*  <div className='downloadCircle'> */}
          <img src={downloadIcon} alt="downloadIcon" />
          {/* </div> */}
          {/* <div className='downloadCircle'> */}
          <img src={downloadIcon} alt="downloadIcon" />
          {/* </div> */}
        </div>

        {/* <p className="downloadText">"!perdon,perdon,gran conductor!..."</p> */}
      </div>
    </div>
  );
}
