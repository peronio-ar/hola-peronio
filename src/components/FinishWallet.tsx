import FinishWalletFondo from "../assets/images/FinishWallet/FinishWalletFondo.svg";
import CounterFinishWallet from "../assets/images/FinishWallet/CounterFinishWallet.svg";
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.svg";
import LogoPeronio from "../assets/images/CreateWallet/LogoPeronio.svg";
export default function FinishWallet({handleClickNext, counter}: any) {
  return (
    <div className="finishWalletBackground">
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

        <div className="piechart">
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
      <div className="contentBarra">
        <div className="FinisWalletInnerBara">.</div>
        <img src={downloadCar2} alt="downloadCar2" className="downloadCar5" />

        <div className="circleOfBarra">
          <div className="FinishWalletCircleBlack">.</div>
          <div className="FinishWalletCircleBlack">.</div>
          <div className="FinishWalletCircleBlack">.</div>
          <div className="FinishWalletCircleBlack">.</div>
        </div>

        <p className="finishWalletFooterText">
          <strong>“...¡Sos el primer trabajador!”</strong>
        </p>
      </div>
    </div>
  );
}
