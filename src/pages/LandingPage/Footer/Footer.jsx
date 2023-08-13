import { TextField } from "@mui/material";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { contactInfo, logos } from "../../../data/footer";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__detail">
        <div className="footer-container__detail--info">
          <img src={"logo"} alt="logo" />
          <p>
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </p>
          <h5>Copyright Satyam Studio</h5>
        </div>
        <div className="footer-container__detail--info">
          <strong>Service</strong>
          <span>Web Application</span>
          <span>Mobile Application</span>
          <span>UX Desgin</span>
          <span>CMS Web Application</span>
          <span>Logo Design</span>
        </div>
        <div className="footer-container__detail--info">
          <strong>Company</strong>
          <span>Serives</span>
          <span>Our Team</span>
          <span>Portfolio</span>
          <span>Blog</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <div className="footer-container__detail--info">
          <strong>Join with us</strong>
          <div className="footer-container__detail--input">
            <div>
              <TextField
                id="eamil"
                size="small"
                variant="outlined"
                label="email"
                autoFocus
                aria-describedby="phoneNumber-helper-text"
                helperText={false && "Incorrect entry."}
              />
              <ButtonComp text="Subscribe" />
            </div>
          </div>
          <div style={{ marginTop: "16px" }}>
            {logos.map((logo, index) => (
              <img
                src={logo}
                key={index}
                alt={index}
                width="18"
                height="18"
                style={{ marginRight: "12px" }}
              />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-container__contact">
        <strong>Google Map Location</strong>
        <div className="footer-container__contact--detail">
          {contactInfo.map((item) => (
            <div>
              <img src={item.icon} alt="" width="18" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
