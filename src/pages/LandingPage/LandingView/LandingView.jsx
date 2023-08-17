import React from "react";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import "./LandingView.scss";
import landingPageVideo from "../../../assets/videos/landing-page.mp4";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { Typography } from "@mui/material";
import { landingView } from "../../../utility/responsiveUI";
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
          <Typography
            variant="h1"
            sx={{
              fontSize: landingView.titleFS,
            }}
          >
            Boost your business with us
          </Typography>
        </div>
        <Typography variant="h4" sx={{ fontSize: landingView.textFS }}>
          We provides multiple services with effective cost and efficient code,
          and we have the best engineer with us, who will full fill your all
          needs.
        </Typography>
        <div className="lv-container__heading--contact-btn">
          <ButtonComp text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default LandingView;
