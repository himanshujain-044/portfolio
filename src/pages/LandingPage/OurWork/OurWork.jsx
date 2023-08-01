import "./OurWork.scss";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { ourWork } from "../../../data/ourWork";
const OurWork = () => {
  return (
    <div className="ow-container">
      <div className="ow-container__title">
        <h3>Some pieces of our work</h3>
        <p>
          We have completed many successfull project with 100% client
          satisfaction, and we are trying to connect with new people and will
          make thier business grow for that we have a good team of our own.
        </p>
        <ButtonComp text="Show More" />
      </div>
      <div className="ow-container__work-grid">
        {ourWork.map((work) => {
          return (
            <div>
              <img src={work.img} alt={work.title} />
              {work.works.map((workType, index) => (
                <ButtonComp text={workType} key={index} />
              ))}
              <h3>{work.title}</h3>
              <span>Read more icon</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurWork;
