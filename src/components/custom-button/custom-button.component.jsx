import "./custom-button.styles.scss";

const CustomButton = ({
  inverted = false,
  variant = "default",
  children,
  ...otherProps
}) => (
  <button
    className={`custom-button variant-${variant} ${inverted ? "inverted" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
