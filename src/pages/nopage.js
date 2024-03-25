import "../styles/component.css";
import "../styles/layout.css";
import Welcom from "../png/66_generated.png";
import Glyphicon from "../png/image-from-rawpixel-id-3819993-png.png";
import Img1 from "../png/1.png";
import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical, FaHouseMedical } from "react-icons/fa6";
export default function NoPage() {
  return (
    <>
    <div className="page-name-con">
      <div className="page-bg-min-con-nav">
          <div className="page-background-nav page-back-1-nav">
            <FaHouseMedical />
          </div>
          <div className="page-background-nav page-back-3-nav">
            <CiMedicalCross />
          </div>
          <div className="page-background-nav page-back-2-nav">
            <FaHandHoldingMedical />
          </div>
          <div className="page-background-nav page-back-4-nav">
            <CiMedicalCross />
          </div>
         
          <div className="page-background-nav page-back-5-nav">
            <CiMedicalClipboard />
          </div>
        </div>
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
         
        </span>
        <h1 className="page-name-h1"></h1>
      </div>

      <div className="welcome-user">
      <h1>Welcome Patient</h1>
        <div className="welcom-img-con">
          <img className="welcom-img" src={Glyphicon} alt="" />
        </div>
       
      </div>
    </>
  );
}
