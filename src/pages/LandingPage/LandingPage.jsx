import React from "react";
import "./LandingPage.scss";
import Header from "./Header/Header";
import LandingView from "./LandingView/LandingView";
import ServicesAndStrategies from "./ServicesAndStrategies/ServicesAndStrategies";
import ProjectForm from "./ProjectForm/ProjectForm";
import WorkedCompany from "./WorkedCompany/WorkedCompany";
import OurWork from "./OurWork/OurWork";
import OurCustomer from "./OurCustomer/OurCustomer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <LandingView />
      <WorkedCompany />
      <ServicesAndStrategies />
      <OurWork />
      <OurCustomer />
      <ProjectForm />
    </div>
  );
};

export default LandingPage;
