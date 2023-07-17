import React from "react";
import "./LandingPage.scss";
import Header from "./Header/Header";
import LandingView from "./LandingView/LandingView";
import ServicesAndStrategies from "./ServicesAndStrategies/ServicesAndStrategies";
import ProjectForm from "./ProjectForm/ProjectForm"
import { industriesDetails } from "../../data/industriesDetails";
import { happyCustomers } from "../../data/happyCustomers";

const LandingPage = () => {
  return (
    <div className="lp-container">
      <Header />
      <LandingView />
      <ServicesAndStrategies />
      <div>
        <h3>Industries We have Worked with</h3>
        <div className="lp-container__industries">
          {industriesDetails.map((industry) => {
            return (
              <div>
                {industry.icon}
                <h5>{industry.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Our Happiest Customers</h3>
        <div className="lp-container__happy-customers">
          {happyCustomers.map((customer) => {
            return (
              <div>
                <img src={customer.profileImg} alt="" />
                <h5>{customer.name}</h5>
                <strong>{customer.businessType}</strong>
                <p>{customer.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ProjectForm />
    </div>
  );
};

export default LandingPage;
