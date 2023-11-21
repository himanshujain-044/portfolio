import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { ourWork } from "../../../data/ourWork";
import { Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import "./OurWork.scss";
import { useState } from "react";
const OurWork = () => {
  const [gridBoxRef, gridBoxuseInView] = useInView({ threshold: 0 });
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="ow-container" id="work" ref={gridBoxRef}>
      <div className="ow-container__info">
        <Typography
          variant="h3"
          sx={{ fontSize: sectionTitleFS }}
          className="ow-container__info--title"
        >
          Some pieces of our work
        </Typography>
        <p className="ow-container__info--sub-title">
          We have completed many successfull project with 100% client
          satisfaction, and we are trying to connect with new people and will
          make thier business grow for that we have a good team of our own.
        </p>

        {showMore && <span>This is under maintenance.</span>}
        {!showMore && (
          <ButtonComp
            text="Show More"
            className="transparent-btn"
            onClickEvent={() => {
              setShowMore(true);
            }}
          />
        )}
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
