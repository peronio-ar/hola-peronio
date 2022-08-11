import React from "react";
import backgroundWelcome from "../assets/images/ImagesWelcome/backgroundWelcomeMobile.svg";
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.svg";
import MobileWelcomeContent from "../assets/images/MobileWelcome/MobileWelcomeContent.svg";
import mobileWelcomePerson from "../assets/images/MobileWelcome/mobileWelcomePerson.svg";

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

        <div className="contentMobileWelcome">
          <div className="contentTextMobile">
            <p className="welcomeMobileTitle">Hola Peronio</p>

            <div className="welcomePinkContent">
              <p className="contentGreetingText">
                Bienvenido al <br /> mundo de Peronio
              </p>
            </div>
            <div className="mobileWelcomeTextS">
              <p className="welcomeContainerTextSMobile">
                PARA ARRANCAR
                <br />
                DESCARGATE
                <span className="welcomeContainerTextWalletMobile">
                  ALPHA WALLET
                </span>
                <br />
                EN TU TELEFONO
              </p>
            </div>
          </div>

          {/* <img
            src={MobileWelcomeContent}
            alt="FondoWelcomeMobile"
            className="FondoWelcomeMobile"
          /> */}
          <img
            src={mobileWelcomePerson}
            alt="mobileWelcomePerson"
            className="mobileWelcomePerson"
          />
        </div>
        {/* <img
          src={FondoWelcomeMobile}
          alt="FondoWelcomeMobile"
          className="FondoWelcomeMobile"
        />
        <div className="welcomeContainerMobile">
          
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
          </p> */}
        {/*  </div> */}
      </div>
    </div>
  );
}
