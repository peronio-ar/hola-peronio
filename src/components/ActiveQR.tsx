import React from 'react'
import activeQRfondo from "../assets/images/ActiveQR/activeQRfondo.png"
import createWalletBarraVertical from "../assets/images/ActiveQR/createWalletBarraVertical.png"
import createWalletTime from "../assets/images/CreateWallet/createWalletTime.png"
import activeQRBarra from "../assets/images/ActiveQR/activeQRBarra.png"
import ActiveQRButton from "../assets/images/ActiveQR/ActiveQRButton.png"
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.png"
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.png"
export default function Configure() {
    return (
        <div className='ActiveQRBackground'>

            <img src={activeQRfondo} alt="activeQRfondo" className='activeQRfondo' />
            <img src={createWalletBarraVertical} alt="createWalletBarraVertical" className='createWalletBarraVertical' />
            <img src={createWalletTime} alt="createWalletTime" className="activeQRTime" />
            <div className='activeQRContent'>
                <p className='activeQRContenText'>EN LA  APP</p>
                <img src={activeQRBarra} alt="activeQRBarra" className='activeQRBarra' />
                <p className='activeQRContentParraf'>Activá el escaner de QR y
                    hacé click en Conectar</p>
                <img src={ActiveQRButton} alt="ActiveQRButton" className='ActiveQRButton' />
            </div>

            <div className='contentBarra'>
                <img src={downloadCar2} alt="downloadCar2" className='downloadCar2' />
                <div className='ContentInnerBara'>.</div>

                <div className='circleOfBarra'>

                    <div className='downloadCircleBlack'>.</div>
                    {/*  <div className='downloadCircle'> */}<img src={downloadIcon} alt="downloadIcon" />{/* </div> */}
                    {/*  <div className='downloadCircle'> */}<img src={downloadIcon} alt="downloadIcon" />{/* </div> */}
                    {/* <div className='downloadCircle'> */}<img src={downloadIcon} alt="downloadIcon" />{/* </div> */}
                </div>


                <p className='downloadText'>"!perdon,perdon,gran conductor!..."</p>

            </div>



        </div>
    )
}
