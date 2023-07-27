import React from "react";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import "./LandingView.scss";
import landingPageVideo from "../../../assets/videos/landing-page.mp4";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
const LandingView = () => {
  return (
    <div className="lv-container">
      <div className="lv-container__video">
        <video autoPlay loop muted preload="auto">
          <source src={landingPageVideo} type="video/mp4" />
        </video>
      </div>
      <div className="lv-container__heading">
        <div>
          <span className="lv-container__heading--boost-icon">
            <FlashOnRoundedIcon />
          </span>
          <h1>Boost your business with us</h1>
        </div>
        <h4>
          We provides multiple services with effective cost and efficient code,
          and we have the best engineer with us, who will full fill your all
          needs.
        </h4>
        <div className="lv-container__heading--contact-btn">
          <ButtonComp text="Contact Us" />
        </div>
      </div>
      {/* <svg viewBox="0 0 1500 200">
        <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"></path>
      </svg> */}
      {/* <div class="content">
        <h1>Welcome to My Web Page</h1>
        <p>This is the content of my web page.</p>
      </div> */}
      {/* <div class="lines-container">
        <div class="vertical-line"></div>
        <div class="vertical-line"></div>

        <div class="horizontal-line"></div>
        <div class="horizontal-line"></div>
      </div> */}

      {/* <img src={gif} alt="" /> */}
    </div>
  );
};

export default LandingView;
