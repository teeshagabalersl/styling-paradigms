import {
  button,
  buttonVariants,
  buttonSizes,
} from "../styles/button.css.js";

function Button({
  children,
  variant = "primary",
  size = "large",
  disabled = false,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`${button} ${buttonVariants[variant]} ${buttonSizes[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;