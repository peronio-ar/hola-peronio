import DownloadAppFondo from "../assets/images/ImagesDownloadApp/DownloadAppFondo2.svg";
import LogoPeronioWhite from "../assets/images/ImagesDownloadApp/logoPeronioWhite.svg";

import DownloadBarcode from "../assets/images/ImagesDownloadApp/DownloadBarcode.svg";
import barcodeLine from "../assets/images/ImagesDownloadApp/barcodeLine.svg";

import qrApple from "../assets/images/ImagesDownloadApp/qrApple.svg";
import qrPlayStore from "../assets/images/ImagesDownloadApp/qrPlayStore.svg";
import Counter from "./Counter";

import { Element } from "react-scroll";
export default function DownloadApp({ handleClickNext, counter, isApple }: any) {
  return (
    <Element name="downloadApp" className="DownloadAppBackgorund">
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
          YA LA DESCARGUÉ
          <img src={barcodeLine} alt="barcodeLine" className="barcodeLine" />
        </button>
      </div>
    </Element>
  );
}
