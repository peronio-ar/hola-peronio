import React from 'react'
import FinishWalletFondo from "../assets/images/FinishWallet/FinishWalletFondo.png"
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.png"


export default function FinishWallet() {
    return (
        <div className='finishWalletBackground'>
            <img src={FinishWalletFondo} alt="FinishWalletFondo" className='FinishWalletFondo' />
            <div className='finishWalletContent'>
                <p className='finishWalletContentText'>¡Listo!</p>

                <p className='finishWalletContentTitle'>Tardaste 53 segundos</p>
            </div>
            <div className='contentBarra'>
                <div className='FinisWalletInnerBara'>.</div>

                <div className='circleOfBarra'>

                    <div className='downloadCircleBlack'>.</div>
                    {/*  <div className='downloadCircle'> */}<img src={downloadIcon} alt="downloadIcon" />{/* </div> */}
                    {/*  <div className='downloadCircle'> */}<img src={downloadIcon} alt="downloadIcon" />{/* </div> */}
                    {/* <div className='downloadCircle'> */}<img src={downloadIcon} alt="downloadIcon" />{/* </div> */}
                </div>


                <p className='finishWalletFooterText'>“...¡Sos el primer trabajador!”</p>

            </div>



        </div>
    )
}
