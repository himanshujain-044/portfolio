import "./ServicesAndStrategies.scss";
import { strategies } from "../../../data/strategies";
import { services } from "../../../data/services";
import techsGif from "../../../assets/gifs/techs.gif";

const ServicesAndStrategies = () => {
  return (
    <div className="services-container">
      <h3 className="services-container__title">Services we offers</h3>
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
        <h2>Why Websols Software is best for you ?</h2>
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
