import { useEffect, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Header.scss";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 600; // Adjust this value as needed for when the color change should trigger
      setScrolling(window.scrollY > threshold);
    };

    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scrolling ? "#1A2A3E" : "", // Change to the desired colors
    transition: "background-color 0.3s ease", // Add a smooth transition
  };
  return (
    <div className="header-container" style={headerStyle}>
      <div className="header-container__left">
        <span>logo</span>
        <h3>Title</h3>
        <div className="header-container__left--options">
          <span>option1</span>
          <span>option2</span>
          <span>option3</span>
        </div>
      </div>
      <div className="header-container__right">
        <CloseOutlinedIcon />
        <MenuOutlinedIcon />
      </div>
    </div>
  );
};
export default Header;
