import React from "react";
import counter from "../assets/images/counter.svg";
import counterGold from "../assets/images/counterGold.svg";
import counterBlack from "../assets/images/counterBlack.svg";

interface props {
    counterNumber: number;
    activeBlack?: boolean;
    gold?: boolean;
}

export default function Counter({ counterNumber = 1, activeBlack = false, gold = false }: props) {
    return (
        <div className="counter">
            <div
                className={`piechartCounter ${gold && "pieGold"}`}
                style={{
                    backgroundImage: `conic-gradient(#ec2929 ${(360 * counterNumber) / 60}deg, transparent 0)`,
                }}
            >
                {" "}
            </div>
            <div className="counterText">{counterNumber}</div>

            <img src={activeBlack ? counterBlack : gold ? counterGold : counter} alt="DownloadReloj" className="navIconReloj" />
        </div>
    );
}
