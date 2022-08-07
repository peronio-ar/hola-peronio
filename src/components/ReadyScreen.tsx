import React from "react";
import readyScreenFondo from "../assets/images/ReadyScreen/readyScreenFondo.png";
import readyScreenBarraVertical from "../assets/images/ReadyScreen/readyScreenBarraVertical.png";
import readyScreenButton from "../assets/images/ReadyScreen/readyScreenButton.png";
import readyScreenArrow from "../assets/images/ReadyScreen/readyScreenArrow.png";
import {ConnectButton} from "@rainbow-me/rainbowkit";
export default function ReadyScreen() {
  return (
    <div className="readyScreen">
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
              <>
                <img
                  src={readyScreenButton}
                  alt="readyScreenButton"
                  className="readyScreenButton"
                />
                <div onClick={openAccountModal} className="readyScreenText">
                  <p> Tu direccion es: </p>
                  <p> {account?.address} </p>
                </div>
              </>
            );
          }}
        </ConnectButton.Custom>

        <p style={{textAlign: "center"}}>
          <strong>
            Para recibir tenes que compartir tu dirección: <br />{" "}
            copiando/pegando o compartiendo QR.
          </strong>
        </p>
        <img src={readyScreenArrow} alt="readyScreenButton" />
      </div>
    </div>
  );
}
