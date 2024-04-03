import picOne from "./Marian_chibi_avatar.webp";
import picTwo from "./Rapi_chibi_avatar.webp";
import picThree from "./images.jpg";
import picFour from "./F-S9RnhWIAAT6ga.jpg";
import picFive from "./FP3SM0BXsAcP-yD.png";
import picSix from "./FhV9fB9akAEnsDy.png";
function SixthSection() {
  return (
    <div className="bot__main">
      <div className="bot__items">
        <p className="bot__items__text">PUBLICATION</p>
        <p className="bot__items__text">REELS</p>
        <p className="bot__items__text">VIDEOS</p>
        <p className="bot__items__text">PIN</p>
      </div>
      <div className="bot__items__main">
        <img className="bot__items__main__img" src={picOne} alt="pic"></img>
        <img className="bot__items__main__img" src={picTwo} alt="pic"></img>
        <img className="bot__items__main__img" src={picThree} alt="pic"></img>
        <img className="bot__items__main__img" src={picFour} alt="pic"></img>
        <img className="bot__items__main__img" src={picFive} alt="pic"></img>
        <img className="bot__items__main__img" src={picSix} alt="pic"></img>
      </div>
    </div>
  );
}
export default SixthSection;
