import DownloadAppFondo from "../assets/images/ImagesDownloadApp/DownloadAppFondo.svg";
import LogoPeronioWhite from "../assets/images/ImagesDownloadApp/logoPeronioWhite.svg";

import DownloadBarcode from "../assets/images/ImagesDownloadApp/DownloadBarcode.svg";
import barcodeLine from "../assets/images/ImagesDownloadApp/barcodeLine.svg";

import downloadIcon from "../assets/images/ImagesDownloadApp/downloadIcon.svg";
import downloadCar2 from "../assets/images/ImagesDownloadApp/downloadCar2.svg";
import qrApple from "../assets/images/ImagesDownloadApp/qrApple.svg";
import qrPlayStore from "../assets/images/ImagesDownloadApp/qrPlayStore.svg";
import Counter from "./Counter";
export default function DownloadApp({handleClickNext, counter, isApple}: any) {
  return (
    <div className="DownloadAppBackgorund">
      <img
        src={DownloadAppFondo}
        alt="DownloadAppFondo"
        className="DownloadAppFondo"
      />

      <div className="downloadContainer">
        <img
          src={LogoPeronioWhite}
          alt="LogoPeronioWhite"
          className="navIconLogo"
        />
        <div className="navIconReloj">
          <Counter gold counterNumber={counter} />
        </div>
      </div>
      <div className="DownloadContent">
        <img
          src={isApple ? qrApple : qrPlayStore}
          alt="DownloadBarcode"
          className="DownloadBarcodeQr"
        />
        <img
          src={DownloadBarcode}
          alt="DownloadBarcode"
          className="DownloadBarcode"
        />

        <button onClick={handleClickNext} className="barcodeButton">
          YA LA DESCARGUE
          <img src={barcodeLine} alt="barcodeLine" className="barcodeLine" />
        </button>
      </div>

      <div className="contentBarra">
        <img src={downloadCar2} alt="downloadCar2" className="downloadCar2" />
        <div className="circleOfBarra">
          <div className="FinishWalletCircleBlack">.</div>
          <img src={downloadIcon} alt="downloadIcon" />
          <img src={downloadIcon} alt="downloadIcon" />
          <img src={downloadIcon} alt="downloadIcon" />
        </div>

        <p className="downloadText">"!Peron, Peron, gran conductor! ..."</p>
      </div>
    </div>
  );
}
