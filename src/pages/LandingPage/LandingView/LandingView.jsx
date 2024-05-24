import React, { useEffect, useState } from "react";
// import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import landingViewImg from "../../../assets/images/landing-view.jpg";
import person from "../../../assets/images/person.png";
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
            {/* <FlashOnRoundedIcon /> */}
            <img src={person} alt="Person" />
          </span>
          <Typography
            variant="h1"
            sx={{
              fontSize: landingView.titleFS,
              letterSpacing: "2px",
            }}
          >
            Who am I ?
          </Typography>
        </div>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "20px", sm: "20px", md: "24px", lg: "24px" },
            letterSpacing: "2px",
          }}
          className={inViewTitle && "title-animation"}
        >
          Full Stack Developer - working in GSLab, Pune
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontSize: landingView.textFS }}
          className={inViewTitle && "title-animation"}
        >
          Experienced Full Stack Developer with 3 years of expertise in
          technologies such as ReactJS, NodeJS, and Angular. Successfully
          delivered impactful solutions across 3 client projects.
        </Typography>
        <div className="lv-container__heading--resume-download-btn">
          <ButtonComp
            text="Download Resume"
            onClickEvent={() => {
              window.open(
                "https://drive.usercontent.google.com/download?id=1nJi01UdsX_Z-_UrTtJZ_4PPB37tOwOnU&export=download&authuser=0",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingView;
