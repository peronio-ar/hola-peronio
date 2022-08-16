import React from "react";
import counter from "../assets/images/counter.svg";
import counterGold from "../assets/images/counterGold.svg";
import counterBlack from "../assets/images/counterBlack.svg";

interface props {
  counterNumber: number;
  activeBlack?: boolean;
  gold?: boolean;
}

export default function Counter({
  counterNumber = 1,
  activeBlack = false,
  gold = false,
}: props) {
  return (
    <div className="counter">
      <div className="counterText">{counterNumber}</div>

      <div className="card">
        <div className="percent">
          <svg>
            <circle
              cx={`${gold ? "51" : "50"}`}
              cy={`${gold ? "49" : "50"}`}
              r="45"
            ></circle>
            <circle
              cx={`${gold ? "51" : "50"}`}
              cy={`${gold ? "49" : "50"}`}
              r="45"
              style={{
                strokeDashoffset: `calc(360px - ${4.7 * counterNumber}px)`,
              }}
            ></circle>
          </svg>
        </div>
      </div>

      <img
        src={activeBlack ? counterBlack : gold ? counterGold : counter}
        alt="DownloadReloj"
        className="navIconReloj"
      />
    </div>
  );
}
