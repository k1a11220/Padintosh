import React from "react";
import HelloSvg from "components/HelloSvg";
import "./Hello.css";
import HOWTOUSE from "./media/howToUse.svg";
import GALLERY from "./media/gallery.svg";
import DETAILS from "./media/details.svg";
import CREDITS from "./media/credits.svg";
import PADINTOSH_1 from "./media/Padintosh-1.jpg";

const Hello = () => {
  return (
    <>
      <HelloSvg />
      <section className="ment">
        <div>
          <p>Sometimes we want to go back to the old days.</p>
          <p>가끔씩 옛날로 돌아가고 싶을 때가 있죠.</p>
        </div>
      </section>
      ''
      <section className="howToUse">
        <div>
          <img className="titleSvg" src={HOWTOUSE} alt="How to use" />
        </div>
        <div className="howToUseContents">
          <ul className="insWrapper">
            <li>
              <img className="insImg" src={PADINTOSH_1} alt="img" />
            </li>
            <li>
              <p>2. Add this page at home screen.</p>
              <p>페이지를 홈 화면에 추가합니다.</p>
            </li>
            <li>
              <img className="insImg" src={PADINTOSH_1} alt="img" />
            </li>
          </ul>
          <ul className="insWrapper">
            <li>
              <p>1. Remove support and finishing surface.</p>
              <p>서포트를 제거하고 표면을 정리합니다.</p>
            </li>
            <li>
              <img className="insImg" src={PADINTOSH_1} alt="img" />
            </li>
            <li>
              <p>3. Insert iPad to the slot</p>
              <p>아이패드를 스탠드 슬롯에 삽입합니다.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="gallery">
        <img className="titleSvg" src={GALLERY} alt="How to use" />
      </section>
      <section className="details">
        <div>
          <img className="titleSvg" src={DETAILS} alt="How to use" />
        </div>
        <div>
          <ul className="termWrapper">
            <li>
              <div className="bar"></div>
              <p>
                스탠드와 결합 시 Face ID와 Touch ID를 사용할 수 없습니다.
                <br />
                블루투스 키보드와 마우스를 함께 사용하는 것을 권장합니다.
              </p>
            </li>
            <li>
              <div className="bar"></div>
              <p>
                애플의 매킨토시 클래식에 영감을 받아 제작했습니다. <br />
                상업적 용도를 제외한, 개인적 용도로 사용 가능합니다.
              </p>
            </li>
          </ul>
          <ul className="termWrapper">
            <li>
              <div className="bar"></div>
              <p>
                Can’t use Face ID and Touch ID with this stand. <br />
                Recommended to use with bluetooth keyboard and mouse.
              </p>
            </li>
            <li>
              <div className="bar"></div>
              <p>
                Inspired by Apple’s Macintosh Classic. <br />
                Free-for-non-commercial-use.
              </p>
            </li>
          </ul>
        </div>
        <div className="download">
          <p>
            Classic Stand for iPad Pro 11 && iPad Air 4 <br />
            <button>Download stl</button>
          </p>
        </div>
        <div className="download">
          <p>
            Classic Stand for iPad Air 3 && iPad 7, 8<br />
            <button>Download stl</button>
          </p>
        </div>
      </section>
      <section className="credits">
        <img className="titleSvg" src={CREDITS} alt="How to use" />
      </section>
    </>
  );
};

export default Hello;
