import "./ProjectForm.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { useState } from "react";
import { phoneCountryCode } from "../../../data/phoneCountryCode";
import { getFlagEmoji } from "../../../utility/common";
import MapImage from "../../../components/MapImage/MapImage";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
const serviceType = [
  {
    text: "Mobile Application Development",
    value: "mobileAppDev",
  },
  {
    text: "Web Development",
    value: "webDev",
  },
  {
    text: "UI/UX",
    value: "uiux",
  },
  {
    text: "QA Service",
    value: "qa",
  },
  {
    text: "Other",
    value: "other",
  },
];

const requirementType = [
  {
    text: "Existing Project",
    value: "existingProject",
  },
  {
    text: "New Project",
    value: "newProject",
  },
  {
    text: "Hire Team",
    value: "hireTeam",
  },
  {
    text: "Support Maintenance",
    value: "maintenance",
  },
  {
    text: "Other",
    value: "other",
  },
];
const ProjectForm = () => {
  //   const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [allFormValues, setAllFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    serviceType: "webDev",
    requirementType: "newProject",
  });
  return (
    <div className="pf-container">
      <h3 className="pf-container__title">Get Ready to Start Project</h3>

      <div className="pf-container__content">
        <div className="pf-container__form">
          <FormControl className="pf-container__form--input">
            <TextField
              id="fullName"
              size="small"
              variant="outlined"
              label="Full Name"
              aria-describedby="firstName-helper-text"
              helperText={false && "Incorrect entry."}
            />
          </FormControl>

          <FormControl className="pf-container__form--input">
            <TextField
              id="email"
              size="small"
              variant="outlined"
              label="Email"
              aria-describedby="email-helper-text"
              helperText={false && "Incorrect entry."}
            />
          </FormControl>
          <div className="pf-container__form--input">
            <FormControl className="mobile-input">
              <InputLabel>Country Code</InputLabel>
              <Select
                labelId="country-code-label"
                size="small"
                id="demo-simple-select"
                value={allFormValues.countryCode}
                label="Country Code"
                renderValue={(selected) => {
                  const countryInfo = phoneCountryCode.find(
                    (countryCode) => countryCode.dial_code === selected
                  );
                  return (
                    <>
                      <span>{getFlagEmoji(countryInfo.code)}</span>
                      <span> {countryInfo.dial_code}</span>
                    </>
                  );
                }}
                onChange={(e) =>
                  setAllFormValues({
                    ...allFormValues,
                    countryCode: e.target.value,
                  })
                }
              >
                {phoneCountryCode.map((countryCode, i) => (
                  <MenuItem value={countryCode.dial_code} key={i}>
                    <span>{getFlagEmoji(countryCode.code)}</span>
                    <span> {countryCode.name}</span>
                    <span> {countryCode.dial_code}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                id="phoneNumber"
                size="small"
                variant="outlined"
                label="Phone Number"
                aria-describedby="phoneNumber-helper-text"
                helperText={false && "Incorrect entry."}
              />
            </FormControl>
          </div>
          <FormControl className="pf-container__form--input">
            <InputLabel>Service Type</InputLabel>
            <Select
              labelId="service-type-label"
              label="Service Type"
              size="small"
              value={allFormValues.serviceType}
              onChange={(e) =>
                setAllFormValues({
                  ...allFormValues,
                  serviceType: e.target.value,
                })
              }
            >
              {serviceType.map((service, i) => (
                <MenuItem value={service.value} key={i}>
                  {service.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="pf-container__form--input">
            <InputLabel>Requirement Type</InputLabel>
            <Select
              labelId="requirement-type-label"
              label="Requirement Type"
              size="small"
              value={allFormValues.requirementType}
              onChange={(e) =>
                setAllFormValues({
                  ...allFormValues,
                  requirementType: e.target.value,
                })
              }
            >
              {requirementType.map((requirement, i) => (
                <MenuItem value={requirement.value} key={i}>
                  {requirement.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="pf-container__form--input">
            <TextareaAutosize
              id="firstName"
              size="small"
              variant="outlined"
              color="neutral"
              label="First Name"
              aria-describedby="firstName-helper-text"
              helperText={false && "Incorrect entry."}
              placeholder="brief about the project..."
              className="text-area-input"
            />
          </FormControl>

          <ButtonComp text="Submit" className="no-margin" />
        </div>
        <div>
          <MapImage />
        </div>
      </div>
    </div>
  );
};
export default ProjectForm;
