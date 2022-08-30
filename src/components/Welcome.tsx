import React from "react";
import backgroundWelcome from "../assets/images/ImagesWelcome/backgroundWelcome.svg";
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.svg";
import welcomeContainer from "../assets/images/ImagesWelcome/welcomeContainer.svg";
import welcomePeople from "../assets/images/ImagesWelcome/welcomePeople.svg";
import welcomeSun from "../assets/images/ImagesWelcome/welcomeSun.svg";
import welcomeContentButtons from "../assets/images/ImagesWelcome/welcomeContentButtons.svg";
import welcomeAppStore from "../assets/images/ImagesWelcome/welcomeAppStore.svg";
import welcomeAndroid from "../assets/images/ImagesWelcome/welcomeAndroid.svg";

import welcomeCircle from "../assets/images/ImagesWelcome/welcomeCircle.svg";
import { Element } from "react-scroll";

export default function Welcome({ handleClickNext, setIsApple }: any) {
    const handleClickAppStore = () => {
        handleClickNext();
        setIsApple(true);
    };
    const handleClickGooglePlay = () => {
        handleClickNext();
        setIsApple(false);
    };

    return (
        <Element name="welcome" className="welcomeBackground">
            <img src={backgroundWelcome} alt="backgroundWelcome" className="backgroundImage" />

            <div className="containerTitle-logo">
                <p className="welcome">Hola</p>
                <img src={logoPeronio} alt="logoPeronio" className="logoPeronio" />
            </div>

            <div className="welcomeContainer">
                <img src={welcomeContainer} alt="welcomeContainer" className="welcomeContainerImage" />

                <div className="container-text">
                    <p className="welcomeContainerText">
                        Usar Peronio <br /> Te va a llevar un total de
                    </p>

                    <img src={welcomeCircle} alt="welcomeCircle" className="welcomeCircle" />
                    <p className="welcomeContainerTime">
                        60 <br /> <span>SEGUNDOS</span>
                    </p>

                    <p className="welcomeContainerTextS">
                        PARA ARRANCAR <br /> DESCARGATE
                        <span className="welcomeContainerTextWallet">ALPHA WALLET</span>
                        <br />
                        EN TU TELEFONO
                    </p>

                    <img src={welcomeContentButtons} alt="welcomeContentButtons" className="welcomeContentButtons" />
                </div>
            </div>

            <div className="welcomeContainerButtons">
                <button onClick={handleClickAppStore}>
                    <img src={welcomeAppStore} alt="welcomeAppStore" className="welcomeAppStore" />
                </button>
                <button onClick={handleClickGooglePlay}>
                    <img src={welcomeAndroid} alt="welcomeAppStore" className="welcomeAppStore" />
                </button>
            </div>

            <img src={welcomeSun} alt="welcomeSun" className="welcomeSun" />
            <img src={welcomePeople} alt="welcomePeople" className="welcomePeople" />
        </Element>
    );
}
