import "./ServicesAndStrategies.scss";
import { strategies } from "../../../data/strategies";
import { services } from "../../../data/services";
const ServicesAndStrategies = () => {
  return (
    <div className="services-container">
      <h3>Our Services</h3>
      <p className="services-container__sub-info">
        We gives the services related to Web Development, App Development and
        CMS related content with very effective and efficient way
      </p>
      <div className="services-container__grid">
        {services.map((service) => {
          return (
            <div className="services-container__grid--content">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Why Websols Software is best for you ?</h2>
        <div className="services-container__strategies">
          {strategies.map((strategy) => {
            return (
              <div>
                <img src={strategy.icon} alt={strategy.title} />
                <h3>{strategy.title}</h3>
                <p>{strategy.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ServicesAndStrategies;
