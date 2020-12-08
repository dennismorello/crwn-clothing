import "./custom-button.styles.scss";

const CustomButton = ({ variant = "default", children, ...otherProps }) => (
  <button className={`variant-${variant} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
