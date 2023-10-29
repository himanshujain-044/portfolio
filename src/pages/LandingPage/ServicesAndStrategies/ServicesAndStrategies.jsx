import { strategies } from "../../../data/strategies";
import { services } from "../../../data/services";
import techsGif from "../../../assets/gifs/techs.gif";
import { Typography } from "@mui/material";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import { useInView } from "react-intersection-observer";
import cx from "classnames";
import "./ServicesAndStrategies.scss";

const ServicesAndStrategies = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div className={"services-container"}>
      <Typography
        variant="h3"
        sx={{ fontSize: sectionTitleFS }}
        className="services-container__title"
      >
        Services we offers
      </Typography>
      <p className="services-container__sub-info">
        We gives the services related to Web Development, App Development and
        CMS related content with very effective and efficient way
      </p>
      <div
        className={cx("services-container__grid", inView && "animation")}
        ref={ref}
      >
        {services.map((service) => {
          return (
            <div className="services-container__grid--content">
              <div>
                <img src={service.img} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="services-container__strategies">
        <Typography
          variant="h3"
          sx={{ fontSize: sectionTitleFS }}
          className="services-container__strategies--title"
        >
          Why Websols Software is best for you ?
        </Typography>
        <div className="services-container__strategies--details">
          <div className="services-container__strategies--techs-gif">
            <img src={techsGif} alt="" />
          </div>
          <div className="services-container__strategies--content">
            {strategies.map((strategy) => {
              return (
                <div>
                  <div>{strategy.icon}</div>
                  <h3>{strategy.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesAndStrategies;
