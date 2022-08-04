import React from 'react'
import backgroundWelcome from "../assets/images/ImagesWelcome/backgroundWelcome.png";
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.png"
import FondoWelcomeMobile from "../assets/images/MobileWelcome/FondoWelcomeMobile.png"
import welcomeImageSpikes from "../assets/images/ImagesWelcome/welcomeImageSpikes.png"
import mobileWelcomeBarraLateral from "../assets/images/MobileWelcome/mobileWelcomeBarraLateral.png"
import WelcomeMobileButton from "../assets/images/MobileWelcome/WelcomeMobileButton.png"



export default function MobileWelcome() {
    return (
        <div className="welcomeBackground">
            <img src={backgroundWelcome} alt="backgroundWelcome" className="backgroundImage" />
            <img src={logoPeronio} alt="logoPeronio" className="logoPeronioMobile" />
            <img src={FondoWelcomeMobile} alt="FondoWelcomeMobile" className="FondoWelcomeMobile" />
            <div className="welcomeContainerMobile">
                <p className='welcomeMobileTitle'>Hola Peronio</p>
                <div className='welcomeMobileContentGreeting'>
                    <p className='contentGreetingText'>Bienvenido al</p>
                    <p className='contentGreetingText'> mundo de Peronio</p>
                    <img src={mobileWelcomeBarraLateral} alt="mobileWelcomeBarraLateral" className='mobileWelcomeBarraLateral' />
                </div>

                <div className=''>
                    <p className="welcomeContainerTextS">PARA ARRANCAR </p>
                    <p className="welcomeContainerTextS">DESCARGATE <span className="welcomeContainerTextWallet">ALPHA WALLET</span></p>
                    <p className="welcomeContainerTextS">EN TU TELEFONO</p>
                </div>
                <img src={WelcomeMobileButton} alt="WelcomeMobileButton" className='WelcomeMobileButton' />
                <p className='titleButton'>Descargar</p>
            </div>

        </div>
    )
}
