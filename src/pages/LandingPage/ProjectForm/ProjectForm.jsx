import "./ProjectForm.scss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { useState } from "react";
import { phoneCountryCode } from "../../../data/phoneCountryCode";
import emailjs from "@emailjs/browser";
// import { getFlagEmoji } from "../../../utility/common";
// import MapImage from "../../../components/MapImage/MapImage";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import CustomSnackbar from "../../../components/SnackbarComp/SnackbarComp";

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
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "error",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [allFormValues, setAllFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    serviceType: "webDev",
    requirementType: "newProject",
    description: "",
  });
  const onFormSubmit = () => {
    setSnackbar({
      open: false,
      message: "",
      type: "success",
    });
    setIsLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_MAIL_SERVICE_ID,
        process.env.REACT_APP_MAIL_TEMP_ID,
        allFormValues,
        process.env.REACT_APP_MAIL_PUBLIC_ID
      )
      .then(
        (response) => {
          setIsLoading(false);
          setSnackbar({
            open: true,
            message: "Your request has been sent, Thank You !",
            type: "success",
          });
        },
        (err) => {
          setIsLoading(false);
          setSnackbar({
            open: true,
            message: "Something Went Wrong !",
            type: "error",
          });
        }
      );
  };

  return (
    <div className="pf-container">
      {snackbar.open && <CustomSnackbar message={snackbar.message} />}
      <Typography
        variant="h3"
        sx={{ fontSize: sectionTitleFS }}
        className="pf-container__title"
      >
        Get Ready to Start Project
      </Typography>
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
              onChange={(e) => {
                setAllFormValues((prev) => {
                  return { ...prev, fullName: e.target.value };
                });
              }}
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
              onChange={(e) => {
                setAllFormValues((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
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
                      <img
                        src={`https://flagcdn.com/48x36/${countryInfo.code.toLocaleLowerCase()}.png`}
                        alt="..."
                        width="16px"
                      />
                      <span> {countryInfo.dial_code}</span>
                    </>
                  );
                }}
                onChange={(e) => {
                  setAllFormValues((prev) => {
                    return { ...prev, countryCode: e.target.value };
                  });
                }}
              >
                {phoneCountryCode.map((countryCode, i) => (
                  <MenuItem value={countryCode.dial_code} key={i}>
                    <img
                      src={`https://flagcdn.com/48x36/${countryCode.code.toLocaleLowerCase()}.png`}
                      alt="..."
                      width="18px"
                      style={{ marginRight: "8px" }}
                    />
                    <span> {countryCode.name}</span>
                    <span style={{ marginLeft: "8px" }}>
                      {countryCode.dial_code}
                    </span>
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
                onChange={(e) => {
                  setAllFormValues((prev) => {
                    return { ...prev, phone: e.target.value };
                  });
                }}
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
              onChange={(e) => {
                setAllFormValues((prev) => {
                  return { ...prev, serviceType: e.target.value };
                });
              }}
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
              onChange={(e) => {
                setAllFormValues((prev) => {
                  return { ...prev, requirementType: e.target.value };
                });
              }}
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
              id="description"
              size="small"
              variant="outlined"
              color="neutral"
              label="Description"
              aria-describedby="description-helper-text"
              helperText={false && "Incorrect entry."}
              placeholder="brief about the project..."
              className="text-area-input"
              onChange={(e) => {
                setAllFormValues((prev) => {
                  return { ...prev, description: e.target.value };
                });
              }}
            />
          </FormControl>

          <ButtonComp
            text="Submit"
            className="no-margin"
            hasLoading={isLoading}
            onClickEvent={onFormSubmit}
          />
        </div>
        <div className="pf-container__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104539.28645736807!2d78.75666759481346!3d23.869657545199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d10b80a73f47%3A0xbc5da3db6a37f08a!2sMakroniya%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1693153455454!5m2!1sen!2sin"
            width="500"
            height="100%"
            allowfullscreen=""
            style={{ border: "none" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Makronia Sagar, M.P"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ProjectForm;
