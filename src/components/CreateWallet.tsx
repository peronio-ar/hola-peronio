import React from 'react'
import CreateWalletFondo from "../assets/images/CreateWallet/CreateWalletFondo.png"
import createWalletTime from "../assets/images/CreateWallet/createWalletTime.png"
import createWalletBarra from "../assets/images/CreateWallet/createWalletBarra.png"
import createWalletCartel from "../assets/images/CreateWallet/createWalletCartel.png"
import createWalletBUTTONS from "../assets/images/CreateWallet/createWalletBUTTONS.png"
import createWalletButton from "../assets/images/CreateWallet/createWalletButton.png"
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.png"
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.png"


export default function CreateWallet() {
    return (
        <div className='createWalletBackground'>
            <img src={CreateWalletFondo} alt="CreateWalletFondo" className='CreateWalletFondo' />
            <img src={createWalletTime} alt="createWalletTime" className='createWalletTime' />
            <img src={createWalletBarra} alt="createWalletBarra" className='createWalletBarra' />

            <div className='contentButton'>
                <img src={createWalletCartel} alt="createWalletCartel" className='createWalletCartel' />
                <p className='contentButtonText'>abri la aplicaion y toca</p>
                <img src={createWalletBUTTONS} alt="createWalletBUTTONS" className='createWalletBUTTONS' />

            </div>
            <img src={createWalletButton} alt="createWalletButton" className='createWalletButton' />

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
