import React from "react";
import backgroundWelcome from "../assets/images/ImagesWelcome/backgroundWelcome.png";
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.png";
import FondoWelcomeMobile from "../assets/images/MobileWelcome/FondoWelcomeMobile.png";
import welcomeImageSpikes from "../assets/images/ImagesWelcome/welcomeImageSpikes.png";
import mobileWelcomeBarraLateral from "../assets/images/MobileWelcome/mobileWelcomeBarraLateral.png";
import WelcomeMobileButton from "../assets/images/MobileWelcome/WelcomeMobileButton.png";

export default function MobileWelcome({handleClickNext}: any) {
  const handleClickButton = () => {
    let navegador = navigator.userAgent;

    if (/android/i.test(navegador))
      window.location.href =
        "https://play.google.com/store/apps/details?id=io.stormbird.wallet&hl=en_us";
    else
      window.location.href =
        "https://apps.apple.com/us/app/alphawallet-eth-wallet/id1358230430";

    handleClickNext();
  };

  return (
    <div className="welcomeBackground mobileWelcome">
      <img
        src={backgroundWelcome}
        alt="backgroundWelcome"
        className="backgroundImage"
      />
      <img src={logoPeronio} alt="logoPeronio" className="logoPeronioMobile" />
      <img
        src={FondoWelcomeMobile}
        alt="FondoWelcomeMobile"
        className="FondoWelcomeMobile"
      />
      <div className="welcomeContainerMobile">
        <p className="welcomeMobileTitle">Hola Peronio</p>
        <div className="welcomeMobileContentGreeting">
          <p className="contentGreetingText">Bienvenido al</p>
          <p className="contentGreetingText"> mundo de Peronio</p>
          <img
            src={mobileWelcomeBarraLateral}
            alt="mobileWelcomeBarraLateral"
            className="mobileWelcomeBarraLateral"
          />
        </div>

        <div className="mobileWelcomeTextS">
          <p className="welcomeContainerTextS">PARA ARRANCAR </p>
          <p className="welcomeContainerTextS">
            DESCARGATE
            <span className="welcomeContainerTextWallet">ALPHA WALLET</span>
          </p>
          <p className="welcomeContainerTextS">EN TU TELEFONO</p>
        </div>
        <img
          onClick={handleClickButton}
          src={WelcomeMobileButton}
          alt="WelcomeMobileButton"
          className="WelcomeMobileButton"
        />
        <p onClick={handleClickButton} className="titleButton">
          DESCARGAR
        </p>
      </div>
    </div>
  );
}
