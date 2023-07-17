import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
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
