import { strategies } from "../../../data/strategies";
import { services } from "../../../data/services";
import techsGif from "../../../assets/gifs/techs.gif";
import { Typography } from "@mui/material";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import { useInView } from "react-intersection-observer";
import cx from "classnames";
import "./ServicesAndStrategies.scss";

const ServicesAndStrategies = () => {
  const [cardRef, inViewCard] = useInView({ threshold: 0 });
  const [strategiesRef, inViewStrategies] = useInView({ threshold: 0 });
  return (
    <div className={"services-container"} ref={cardRef}>
      <Typography
        variant="h3"
        sx={{ fontSize: sectionTitleFS }}
        className={cx(
          "services-container__title",
          inViewCard && "animate-charcter"
        )}
      >
        Services we offers
      </Typography>
      <p
        className={cx(
          "services-container__sub-info",
          inViewCard && "title-animation"
        )}
      >
        We gives the services related to Web Development, App Development and
        CMS related content with very effective and efficient way
      </p>
      <div
        className={cx(
          "services-container__grid",
          inViewCard && "cards-animation"
        )}
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
      <div
        className={cx(
          "services-container__strategies",
          inViewStrategies && "strategies-animation"
        )}
        ref={strategiesRef}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: sectionTitleFS }}
          className="services-container__strategies--title"
        >
          Why Websols Software is best for you ?
        </Typography>
        <div className="services-container__strategies--details">
          <div
            className={cx(
              "services-container__strategies--techs-gif",
              inViewStrategies && "tech-gif-animation"
            )}
          >
            <img src={techsGif} alt="" />
          </div>
          <div
            className={cx(
              "services-container__strategies--content",
              inViewStrategies && "content-animation"
            )}
          >
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
