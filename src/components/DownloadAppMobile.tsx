import React from 'react'
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.png"
import backgroundWelcome from "../assets/images/ImagesWelcome/backgroundWelcome.png";
import FondoDowloadAppMobile from "../assets/images/DownloadAppMobile/FondoDowloadAppMobile.png";
import ButtonDownloadApp from "../assets/images/DownloadAppMobile/ButtonDownloadApp.png";



export default function DownloadAppMobile() {
    return (
        <div className="welcomeBackground">
            <img src={backgroundWelcome} alt="backgroundWelcome" className="backgroundImage" />
            <img src={logoPeronio} alt="logoPeronio" className="logoPeronioMobileDownload" />
            <img src={FondoDowloadAppMobile} alt="FondoDowloadAppMobile" className='FondoDowloadAppMobile' />

            <div className='contentDownloadAppMobile'>
                <p className='titleContentDowloadMobile'>Ya lo Descargaste</p>
                <img src={ButtonDownloadApp} alt="ButtonDownloadApp" className='ButtonDownloadApp' />
                <div className='textButtonContent'>
                    <p className='buttonAnswer-SI'>SI</p>
                    <p className="buttonAnswer-NO">NO</p>
                </div>
            </div>




        </div>
    )
}
