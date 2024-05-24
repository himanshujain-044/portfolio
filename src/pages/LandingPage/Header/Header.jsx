import { useEffect, useState } from "react";
import cx from "classnames";
import logo from "../../../assets/logos/company-logo.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Typography } from "@mui/material";
import { header } from "../../../utility/responsiveUI";
// import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      setScrolling(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scrolling ? "#1A2A3E" : "rgba(26, 42, 62, 0.9)", // Change to the desired colors
    transition: "background-color 0.3s ease", // Add a smooth transition
  };
  return (
    <div className="header-container" style={headerStyle}>
      <div className="header-container__left">
        <div className="header-container__left--company-wrap">
          <img src={logo} alt="madhuvan_digitals" />
          <Typography
            variant="h3"
            sx={{ fontSize: header.companyNameFS }}
            className="header-container__left--company-name"
          >
            Himanshu Jain's Portfolio
          </Typography>
        </div>
        <div className="header-container__left--options-wrap">
          <div
            className={cx(
              "header-container__left--options",
              isMenuOpen && "header-container__left--options-opened",
              !isMenuOpen && "header-container__left--options-closed"
            )}
          >
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#colleagues">Colleagues</a>
            <a href="#send-message">Send Message</a>
          </div>
        </div>
      </div>
      <div className="header-container__right">
        {isMenuOpen && (
          <CloseOutlinedIcon
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        )}
        {!isMenuOpen && (
          <MenuOutlinedIcon
            onClick={() => {
              setIsMenuOpen(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
export default Header;
