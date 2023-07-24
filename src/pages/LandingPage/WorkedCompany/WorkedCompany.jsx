import { companiesDetails } from "../../../data/companiesDetails";
import "./WorkedCompany.scss";

const Company = ({ comDetails = {} }) => {
  return (
    <div className="wc-container__company">
      <span>{comDetails.icon}</span>
      <span>{comDetails.name}</span>
    </div>
  );
};

const WorkedCompany = () => {
  return (
    <div className="wc-container">
      <h3 className="wc-container__title">Trusted by many companies</h3>
      <div class="wc-container__scroll">
        <div class="wc-container__m-scroll">
          {companiesDetails.map((comDetails) => (
            <Company comDetails={comDetails} />
          ))}
          {companiesDetails.map((comDetails) => (
            <Company comDetails={comDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorkedCompany;
