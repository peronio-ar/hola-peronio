import React from "react";
import CreateWalletFondo from "../assets/images/CreateWallet/CreateWalletFondo2.svg";
import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
import capture1 from "../assets/images/Captures/capture1.gif";

import { Element } from "react-scroll";
import Counter from "./Counter";

export default function CreateWallet({ handleClickNext, counter }: any) {
    return (
        <Element name="createWallet" className="createWalletBackground">
            <img src={CreateWalletFondo} alt="CreateWalletFondo" className="CreateWalletFondo" />

            <img src={LogoPeronio} alt="createLogoPeronio" className="createLogoPeronio" />

            <div className="createWalletContainer">
                <div className="createWalletTime">
                    <Counter counterNumber={counter} />
                </div>

                <img src={capture1} alt="createWalletBarra" className="createWalletBarra" />
            </div>

            <div className="ContainerButtons">
                <p className="contentButtonText">Abrí la aplicación y tocá</p>
                <button className="contentButtonTextCapture">CREAR NUEVO MONEDERO</button>
            </div>

            <div onClick={handleClickNext} className="contentButton">
                LISTO
            </div>
        </Element>
    );
}
