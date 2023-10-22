import { TextField } from "@mui/material";
import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { contactInfo, logos } from "../../../data/footer";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container" id="about-us">
      <div className="footer-container__detail">
        <div className="footer-container__detail--info">
          <strong className="footer-container__detail--compony-name">
            Madhuvan Digitals
          </strong>
          <p>
            At Madhuvan Digitals, our unwavering commitment revolves around two
            core pillars: Quality and Client Satisfaction. We are more than just
            a company; we are your dedicated partners in the world of
            Information Technology.
          </p>
          <h5>© 2022. All rights reserved by Madhuvan Digitals inc.</h5>
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
        <strong>
          <a
            href="https://goo.gl/maps/9RhJNJPY2LqWMBBw6"
            target="_blank"
            rel="noreferrer"
          >
            Google Map Location
          </a>
        </strong>
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
