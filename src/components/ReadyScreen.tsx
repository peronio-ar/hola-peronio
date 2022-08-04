import React from "react";
import readyScreenFondo from "../assets/images/ReadyScreen/readyScreenFondo.png";
import readyScreenBarraVertical from "../assets/images/ReadyScreen/readyScreenBarraVertical.png";
import readyScreenButton from "../assets/images/ReadyScreen/readyScreenButton.png";
import readyScreenArrow from "../assets/images/ReadyScreen/readyScreenArrow.png";
export default function ReadyScreen() {
  return (
    <div className="readyScreenFondo">
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
        <img
          src={readyScreenButton}
          alt="readyScreenButton"
          className="readyScreenButton"
        />

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
