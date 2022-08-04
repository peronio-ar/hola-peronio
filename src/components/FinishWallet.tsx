import React from "react";
import FinishWalletFondo from "../assets/images/FinishWallet/FinishWalletFondo.png";
import CounterFinishWallet from "../assets/images/FinishWallet/CounterFinishWallet.png";
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.png";

export default function FinishWallet() {
  return (
    <div className="finishWalletBackground">
      <img
        src={FinishWalletFondo}
        alt="FinishWalletFondo"
        className="FinishWalletFondo"
      />
      <div className="finishWalletContent">
        <p className="finishWalletContentText">¡Listo!</p>
        <img src={CounterFinishWallet} alt="FinishWalletFondo" className="" />
        <p className="finishWalletContentTitle">Tardaste 53 segundos</p>
      </div>
      <div className="contentBarra">
        <div className="FinisWalletInnerBara">.</div>

        <div className="circleOfBarra">
          <div className="downloadCircleBlack">.</div>
          <img src={downloadIcon} alt="downloadIcon" />
          <img src={downloadIcon} alt="downloadIcon" />
          <img src={downloadIcon} alt="downloadIcon" />
        </div>

        <p className="finishWalletFooterText">
          <strong>“...¡Sos el primer trabajador!”</strong>
        </p>
      </div>
    </div>
  );
}
