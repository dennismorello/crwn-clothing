import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => (
  <div className="form-group">
    <input className="form-input" {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
