import cx from "classnames";
import "./ButtonComp.scss";
const ButtonComp = ({
  text,
  onClickEvent = () => {},
  className = "",
  isDisabled = false,
}) => {
  return (
    <button
      className={cx("button", className)}
      onClick={onClickEvent}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
export default ButtonComp;
