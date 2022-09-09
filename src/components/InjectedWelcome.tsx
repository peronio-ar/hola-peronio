import React from "react";
import backgroundWelcome from "../assets/images/ImagesWelcome/backgroundWelcome.svg";
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.svg";
import welcomeContainer from "../assets/images/ImagesWelcome/welcomeContainer.svg";
import welcomePeople from "../assets/images/ImagesWelcome/welcomePeople.svg";
import welcomeSun from "../assets/images/ImagesWelcome/welcomeSun.svg";

import { Element } from "react-scroll";
import { useConnect, useNetwork, useSwitchNetwork } from "wagmi";

export default function InjectedWelcome({ connector }: any) {
    const { connect, status } = useConnect();
    const { switchNetwork } = useSwitchNetwork();
    const { chain } = useNetwork();

    const handleConnect = () => {
        connect({ connector });
    };

    const handleSwitch = async () => {
        switchNetwork?.(137);
    };

    const handleAddERC20 = async (): Promise<boolean | undefined> => {
        return window.ethereum?.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20", // Initially only supports ERC20, but eventually more!
                options: {
                    address: "0xc2768beF7a6BB57F0FfA169a9ED4017c09696FF1", // The address that the token is at.
                    symbol: "P", // A ticker symbol or shorthand, up to 5 chars.
                    decimals: 6, // The number of decimals in the token
                    image: "https://raw.githubusercontent.com/peronio-ar/branding/main/logo/v2/256.png", // A string url of the token logo
                },
            },
        });
    };

    return (
        <Element name="welcome" className="injectedBackground">
            <img src={backgroundWelcome} alt="backgroundWelcome" className="backgroundImage" />
            <div className="containerTitle-logo">
                <p className="welcome">Hola</p>
                <img src={logoPeronio} alt="logoPeronio" className="logoPeronio" />
            </div>

            <div className="welcomeContainer">
                <img src={welcomeContainer} alt="welcomeContainer" className="welcomeContainerImage" />

                <div className="container-text">
                    <p className="welcomeContainerText">
                        Tenes una
                        <br />
                        wallet instalada!
                    </p>
                    <p className="injectedWelcomeDiv">
                        {status === "success" ? (
                            <ConnectedBlock handleSwitch={handleSwitch} handleAddERC20={handleAddERC20} chain={chain} />
                        ) : (
                            <button onClick={handleConnect}>Conectar</button>
                        )}
                    </p>
                </div>
            </div>

            <img src={welcomeSun} alt="welcomeSun" className="welcomeSun" />
            <img src={welcomePeople} alt="welcomePeople" className="welcomePeople" />
        </Element>
    );
}

const ConnectedBlock = ({ chain, handleSwitch, handleAddERC20 }: any) => {
    return chain?.id === 137 ? <button onClick={handleAddERC20}>Agregar Peronio</button> : <button onClick={handleSwitch}>Cambiar a Polygon</button>;
};
