import FinishWalletFondo from "../assets/images/FinishWallet/FinishWalletFondo.png";
import CounterFinishWallet from "../assets/images/FinishWallet/CounterFinishWallet.png";
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.png";
export default function FinishWallet({handleClickNext, counter}: any) {
  return (
    <div className="finishWalletBackground">
      <img
        src={FinishWalletFondo}
        alt="FinishWalletFondo"
        className="FinishWalletFondo"
      />
      <div className="finishWalletContent">
        <p className="finishWalletContentText">¡Listo!</p>

        <div className="counterTextFinish" style={{color: "white"}}>
          {counter}
        </div>

        <div className="cardFinish">
          <div className="percent">
            <svg>
              <circle
                cx="110"
                cy="108"
                r="93"
                style={{stroke: "white"}}
              ></circle>
              <circle
                cx="110"
                cy="108"
                r="93"
                style={{
                  strokeDashoffset: `calc(680px - ${9.8 * counter}px)`,
                }}
              ></circle>
            </svg>
          </div>
        </div>
        <img src={CounterFinishWallet} alt="FinishWalletFondo" className="" />
        <p className="finishWalletContentTitle">Tardaste {counter} segundos</p>
        <p onClick={handleClickNext} className="finishWalletContentButton">
          CONTINUAR
        </p>
      </div>
      <div className="contentBarra">
        <div className="FinisWalletInnerBara">.</div>
        <img src={downloadCar2} alt="downloadCar2" className="downloadCar5" />

        <div className="circleOfBarra">
          <div className="downloadCircleBlack">.</div>
          <div className="downloadCircleBlack">.</div>
          <div className="downloadCircleBlack">.</div>
          <div className="downloadCircleBlack">.</div>
        </div>

        <p className="finishWalletFooterText">
          <strong>“...¡Sos el primer trabajador!”</strong>
        </p>
      </div>
    </div>
  );
}
