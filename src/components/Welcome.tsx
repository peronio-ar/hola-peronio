import React from "react";
import backgroundWelcome from "../assets/images/ImagesWelcome/Recurso 2.png";
import welcomeContainer from "../assets/images/ImagesWelcome/welcomeContainer.png";
import welcomeSun from "../assets/images/ImagesWelcome/welcomSun.png";
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.png";
import welcomeImageSpikes from "../assets/images/ImagesWelcome/welcomeImageSpikes.png";
import welcomeCircle from "../assets/images/ImagesWelcome/welcomeCircle.png";
import welcomeContenButtons from "../assets/images/ImagesWelcome/welcomeContenButtons.png";
import welcomeButtons from "../assets/images/ImagesWelcome/welcomeButtons.png";
import welcomePeople from "../assets/images/ImagesWelcome/welcomePeople.png";
export default function Welcome() {
  const handleClickAppStore = () => {};
  const handleClickGooglePlay = () => {};

  return (
    <div className="welcomeBackground">
      <img
        src={backgroundWelcome}
        alt="backgroundWelcome"
        className="backgroundImage"
      />
      <div className="containerTitle-logo">
        <p className="welcome">Hola</p>
        <img src={logoPeronio} alt="logoPeronio" className="logoPeronio" />
      </div>

      <img src={welcomeSun} alt="welcomeSun" className="welcomeSun" />
      <div className="welcomeContainer">
        <img
          src={welcomeContainer}
          alt="welcomeContainer"
          className="welcomeContainerImage"
        />
        <img
          src={welcomeImageSpikes}
          alt="welcomeImageSpikes"
          className="welcomeImageSpikes"
        />
        <div className="container-text">
          <p className="welcomeContainerText">Usar Peroinio </p>
          <p className="welcomeContainerText"> Te va a llevar un total de</p>
          <img
            src={welcomeCircle}
            alt="welcomeCircle"
            className="welcomeCircle"
          />
          <p className="welcomeContainerTime">
            60 <br /> <span>SEGUNDOS</span>
          </p>

          <p className="welcomeContainerTextS">
            PARA ARRANCAR <br /> DESCARGATE
            <span className="welcomeContainerTextWallet">ALPHA WALLET</span>
            <br />
            EN TU TELEFONO
          </p>
        </div>

        <img
          src={welcomeContenButtons}
          alt="welcomeContenButtons"
          className="welcomeContenButtons"
        />
        <img
          src={welcomeButtons}
          alt="welcomeButtons"
          className="welcomeButtons"
        />
      </div>
      <div className="welcomeButtonAction">
        <button onClick={handleClickAppStore}></button>
        <button onClick={handleClickGooglePlay}></button>
      </div>
      <img src={welcomePeople} alt="welcomePeople" className="welcomePeople" />
    </div>
  );
}
