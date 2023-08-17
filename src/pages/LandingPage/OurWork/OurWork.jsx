import "./OurWork.scss";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { ourWork } from "../../../data/ourWork";
import { Typography } from "@mui/material";
import { sectionTitleFS } from "../../../utility/responsiveUI";
const OurWork = () => {
  return (
    <div className="ow-container">
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
        <ButtonComp text="Show More" className="transparent-btn" />
      </div>
      <div className="ow-container__work-grid">
        {ourWork.map((work) => {
          return (
            <div>
              <img src={work.img} alt={work.title} />
              <span>
                {work.works.map((workType, index) => (
                  <ButtonComp text={workType} key={index} />
                ))}
              </span>
              <h3>{work.title}</h3>
              <span>
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
