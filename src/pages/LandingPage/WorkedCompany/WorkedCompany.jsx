import { Typography } from "@mui/material";
import { companiesDetails } from "../../../data/companiesDetails";
import "./WorkedCompany.scss";
import { sectionTitleFS } from "../../../utility/responsiveUI";

const Company = ({ comDetails = {} }) => {
  return (
    <div className="wc-container__company">
      {comDetails.icon}
      <span>{comDetails.name}</span>
    </div>
  );
};

const WorkedCompany = () => {
  return (
    <div className="wc-container">
      <Typography
        variant="h3"
        sx={{ fontSize: sectionTitleFS }}
        className="wc-container__title"
      >
        Trusted by many companies
      </Typography>

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
