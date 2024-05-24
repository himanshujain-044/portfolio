import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { ourWork } from "../../../data/ourWork";
import { Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import "./OurWork.scss";

const OurWork = () => {
  const [gridBoxRef, gridBoxuseInView] = useInView({ threshold: 0 });
  return (
    <div className="ow-container" id="projects" ref={gridBoxRef}>
      <div className="ow-container__info">
        <Typography
          variant="h3"
          sx={{ fontSize: sectionTitleFS }}
          className="ow-container__info--title"
        >
          Projects Worked Upon
        </Typography>
        <p className="ow-container__info--sub-title">
          I have contributed to numerous projects utilizing ReactJS, NodeJS, and
          Angular. Some of these projects are showcased here. To view my GitHub
          profile, please click the button below.
        </p>
        <ButtonComp
          text="Github Profile"
          className="transparent-btn"
          onClickEvent={() => {
            window.open("https://github.com/himanshujain-044", "_blank");
          }}
        />
      </div>
      <div className="ow-container__work-grid">
        {ourWork.map((work) => {
          return (
            <div className={gridBoxuseInView && "zoom-out-grid-box"}>
              <img src={work.img} alt={work.title} />
              <span>
                {work.works.map((workType, index) => (
                  <ButtonComp text={workType} key={index} />
                ))}
              </span>
              <h3>{work.title}</h3>
              <span className="read-more-work">
                Read More
                <ArrowForwardOutlinedIcon />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurWork;
