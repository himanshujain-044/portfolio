import { Typography } from "@mui/material";
import { companiesDetails } from "../../../data/companiesDetails";
import "./WorkedCompany.scss";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import { useEffect, useState } from "react";
import Counter from "../../../shared/components/Counter/Counter";

const Company = ({ comDetails = {} }) => {
  return (
    <div className="wc-container__company">
      {comDetails.icon}
      <span>{comDetails.name}</span>
    </div>
  );
};

const WorkedCompany = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        console.log(window.scrollY);
        setStartCount(true);
      }
      if (window.scrollY < 220) {
        console.log(window.scrollY);
        setStartCount(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {startCount && (
        <div className="wc-container__counters">
          <Counter title="Completed Projects" number={447} />
          <Counter title="Running Projects" number={15} />
          <Counter
            title="Overall Clients Satisfaction"
            number={93}
            suffix="%"
          />
        </div>
      )}
    </div>
  );
};
export default WorkedCompany;
