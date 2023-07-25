import { useEffect, useState } from "react";
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
    backgroundColor: scrolling ? "#f00" : "", // Change to the desired colors
    transition: "background-color 0.3s ease", // Add a smooth transition
  };
  return (
    <div className="header-container" style={headerStyle}>
      <div className="header-container__left">
        <span>logo</span>
        <h3>Title</h3>
        <div>
          <span>option1</span>
          <span>option2</span>
          <span>option3</span>
        </div>
      </div>
      <div className="header-container__right">
        <span>cross</span>
        <span>menu</span>
      </div>
    </div>
  );
};
export default Header;
