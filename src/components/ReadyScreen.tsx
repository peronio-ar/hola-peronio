import React from "react";
import readyScreenFondo from "../assets/images/ReadyScreen/readyScreenFondo.svg";
import readyScreenBarraVertical from "../assets/images/Captures/Capture3Screen6.svg";
import readyScreenArrow from "../assets/images/ReadyScreen/readyScreenArrow.svg";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
export default function ReadyScreen() {
  return (
    <div className="readyScreen">
      <img
        src={LogoPeronio}
        alt="createLogoPeronio"
        className="createLogoPeronio"
      />
      <img
        src={readyScreenFondo}
        alt="readyScreenFondo"
        className="readyScreenFondo"
      />
      <img
        src={readyScreenBarraVertical}
        alt="readyScreenBarraVertical"
        className="readyScreenBarraVertical"
      />
      <div className="finishScreenContent">
        <p className="finishContentText">¡Todo listo, Compañero!</p>

        <ConnectButton.Custom>
          {({account, openAccountModal}) => {
            return (
              <button className="readyScreenButton" onClick={openAccountModal}>
                Tu direccion es: <br />
                {account?.address}
              </button>
            );
          }}
        </ConnectButton.Custom>

        <p className="readyScreenTextFinal">
          <strong>
            Para recibir tenes que compartir tu dirección: <br />
            copiando/pegando o compartiendo QR.
          </strong>
        </p>

        <img
          src={readyScreenArrow}
          alt="readyScreenArrow"
          className="readyScreenArrow"
        />
        <p className="readyScreenArrowText">
          Es equivalente a un CBU <br /> en el mundo cryto
        </p>
      </div>
    </div>
  );
}
