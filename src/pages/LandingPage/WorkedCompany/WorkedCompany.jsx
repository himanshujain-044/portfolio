import { Typography } from "@mui/material";
import { companiesDetails } from "../../../data/companiesDetails";
import "./WorkedCompany.scss";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import { useEffect, useState } from "react";
import Counter from "../../../shared/components/Counter/Counter";
import WorkedCompanyCards from "../../../components/WorkedCompanyCards/WorkedCompanyCards";

const WorkedCompany = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setStartCount(true);
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
      <WorkedCompanyCards companyDetails={companiesDetails} />
      {!startCount && (
        <div className="wc-container__counters">
          <Counter title="Completed Projects" number={0} />
          <Counter title="Running Projects" number={0} />
          <Counter title="Overall Clients Satisfaction" number={0} suffix="%" />
        </div>
      )}
      {startCount && (
        <div className="wc-container__counters">
          <Counter title="Completed Projects" number={22} />
          <Counter title="Running Projects" number={5} />
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
