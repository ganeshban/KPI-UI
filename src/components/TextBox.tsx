interface Props {
  autocomplete?: React.HTMLInputAutoCompleteAttribute;
  classname?: string;
  controller?: React.LegacyRef<HTMLInputElement>;
  disabled?: boolean;
  error?: string[];
  id?: string;
  label?: string;
  labelStyle?: "none" | "top" | "float";
  max?: number;
  maxlength?: number;
  min?: number;
  minlength?: number;
  name?: string;
  pattern?: string;
  placeholer?: string;
  icon?: string;
  required?: boolean;
  size?: "" | "lg" | "sm";
  subfix?: string;
  tooltip?: string;
  type?: "password" | "text" | "number" | "email" | "date" | "time";
  value?: string;
  onclick?: () => void;
}
function TextBox({
  autocomplete,
  classname,
  controller,
  disabled,
  error = [],
  icon,
  id,
  label,
  labelStyle = "top",
  max,
  maxlength,
  min,
  minlength,
  name,
  pattern,
  placeholer,
  required,
  size = "",
  subfix,
  tooltip,
  type = "text",
  value,
}: Props) {
  const lbl = label && (
    <label htmlFor={id} className="form-label">
      {label}
      {required && <span className="text-danger">*</span>}
    </label>
  );

  const ikon = <i className={"input-group-text material-icons"}>{icon}</i>;
  const inputSize = "form-control" + (size && " form-control-" + size);
  const formFloat = labelStyle === "float" ? " form-floating" : "";
  const iconClass = icon ? " input-group" : "";
  const errorList = [];
  required && errorList.push(label + " field is required");
  minlength &&
    errorList.push(
      label + " field has min limit of " + minlength + " charecter"
    );
  maxlength &&
    errorList.push(
      label + " field has max limit of " + maxlength + " charecter"
    );
  error && errorList.push(...error);
  return (
    <>
      {labelStyle === "top" && lbl}
      <div className={"mb-4" + formFloat + iconClass}>
        {icon && ikon}

        <input
          type={type}
          disabled={disabled}
          placeholder={placeholer}
          ref={controller}
          minLength={minlength}
          maxLength={maxlength}
          min={min}
          name={name}
          max={max}
          pattern={pattern}
          className={`form-control ${inputSize} ${classname}`}
          autoComplete={autocomplete}
          id={id}
          required={required}
          title={tooltip}
          alt={value}
        />
        {subfix && <span className="input-group-text">{subfix}</span>}
        {formFloat && lbl}

        <div className="invalid-feedback">
          {errorList.map((x, y) => {
            return <li key={y}>{x}</li>;
          })}
        </div>
      </div>
    </>
  );
}

export default TextBox;
