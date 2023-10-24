import { strategies } from "../../../data/strategies";
import { services } from "../../../data/services";
import techsGif from "../../../assets/gifs/techs.gif";
import { Typography } from "@mui/material";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import Slide from "react-reveal/Slide";
import "./ServicesAndStrategies.scss";

const ServicesAndStrategies = () => {
  return (
    <div className="services-container">
      <Slide bottom duration={2000}>
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
        <div className="services-container__grid">
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
      </Slide>
    </div>
  );
};
export default ServicesAndStrategies;
