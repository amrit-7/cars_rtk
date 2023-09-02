import "./buttonstyles.css";
import className from "classnames";
const Button = ({ children, ...props }) => {
  const classes = className(props.className, "btn-shine");
  return (
    <button {...props} className={classes}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
