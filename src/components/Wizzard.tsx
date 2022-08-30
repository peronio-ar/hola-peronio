import React from "react";
import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.svg";
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.svg";

interface Props {
    step: number;
}

export default function Wizzard({ step }: Props) {
    const width = {
        1: 0,
        2: 0,
        3: 35,
        4: 60,
        5: 100,
    };
    const position = {
        1: 0,
        2: -10,
        3: 18,
        4: 48,
        5: 80,
    };
    const positionResponsive = {
        1: 0,
        2: -10,
        3: 12,
        4: 38,
        5: 70,
    };

    return (
        <div className={`contentBarra ${step === 2 && "removeBarra"}`}>
            <img
                src={downloadCar2}
                alt="downloadCar2"
                className="downloadCar2"
                style={{
                    left: `${screen.width > 450 ? position[step as keyof typeof position] : positionResponsive[step as keyof typeof positionResponsive]}%`,
                }}
            />
            <div className="ContentInnerBara" style={{ width: `${width[step as keyof typeof width]}%` }}>
                .
            </div>
            <div className="circleOfBarra">
                <div className="FinishWalletCircleBlack" />
                {step > 2 ? <div className="FinishWalletCircleBlack" /> : <img src={downloadIcon} alt="downloadIcon" />}
                {step > 3 ? <div className="FinishWalletCircleBlack" /> : <img src={downloadIcon} alt="downloadIcon" />}
                {step > 4 ? <div className="FinishWalletCircleBlack" /> : <img src={downloadIcon} alt="downloadIcon" />}
            </div>

            {step === 2 && <p className="downloadText">“¡Perón, Perón, gran conductor! ...”</p>}
            {step === 5 && (
                <p className="finishWalletFooterText">
                    <strong>“...¡Sos el primer trabajador!”</strong>
                </p>
            )}
        </div>
    );
}
