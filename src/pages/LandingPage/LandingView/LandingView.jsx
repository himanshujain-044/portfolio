import React, { useEffect, useState } from "react";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import landingViewImg from "../../../assets/images/landing-view.jpg";
// import landingPageVideo from "../../../assets/videos/landing-page.mp4";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { Typography } from "@mui/material";
import { landingView } from "../../../utility/responsiveUI";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { useInView } from "react-intersection-observer";

import "./LandingView.scss";
const LandingView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [titleRef, inViewTitle] = useInView();
  useEffect(() => {
    const img = new Image();
    img.src = landingViewImg;

    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="lv-container" id="home">
      <div className="lv-container__video">
        <img src={landingViewImg} alt="" />
      </div>
      <div className={"lv-container__heading"} ref={titleRef}>
        <div className={inViewTitle && "title-animation"}>
          <span className="lv-container__heading--boost-icon">
            <FlashOnRoundedIcon />
          </span>
          <Typography
            variant="h1"
            sx={{
              fontSize: landingView.titleFS,
              letterSpacing: "2px",
            }}
          >
            Boost your business with us
          </Typography>
        </div>
        <Typography
          variant="h4"
          sx={{ fontSize: landingView.textFS }}
          className={inViewTitle && "title-animation"}
        >
          We provides multiple services with effective cost and efficient code,
          and we have the best engineer with us, who will full fill your all
          needs.
        </Typography>
        <div className="lv-container__heading--contact-btn">
          <a href="#contact-us">
            <ButtonComp text="Contact Us" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
