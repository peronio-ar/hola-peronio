import FinishWalletFondo from "../assets/images/FinishWallet/FinishWalletFondo.svg";
import CounterFinishWallet from "../assets/images/FinishWallet/CounterFinishWallet.svg";
import {Element} from "react-scroll";
import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
export default function FinishWallet({handleClickNext, counter}: any) {
  return (
    <Element name="finishWallet" className="finishWalletBackground">
      <img
        src={LogoPeronio}
        alt="createLogoPeronio"
        className="createLogoPeronio"
      />

      <img
        src={FinishWalletFondo}
        alt="FinishWalletFondo"
        className="FinishWalletFondo"
      />
      <div className="finishWalletContent">
        <p className="finishWalletContentText">¡Listo!</p>

        <div
          className="piechart"
          style={{
            backgroundImage: `conic-gradient(#ec2929 ${
              (360 * counter) / 60
            }deg, transparent 0)`,
          }}
        >
          <div className="counterTextFinish" style={{color: "white"}}>
            {counter}
          </div>
        </div>

        <img
          src={CounterFinishWallet}
          alt="FinishWalletFondo"
          className="finishSunContainer"
        />
        <p className="finishWalletContentTitle">Tardaste {counter} segundos</p>
        <p onClick={handleClickNext} className="finishWalletContentButton">
          CONTINUAR
        </p>
      </div>
    </Element>
  );
}
