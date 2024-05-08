interface Props {
  text?: string;
  size?: "" | "lg" | "sm" | "xxl" | "xs" | "md";
  color?: "" | "primary" | "secondary" | "danger" | "success";
  outline?: boolean;
  clsName?: string;
  disabled?: boolean;
  onclick?: () => void;
}

const Button = ({
  clsName = "",
  text = "Button",
  size = "",
  color = "success",
  outline = false,
  disabled = false,
}: Props) => {
  const base = "btn";
  const btnsize = size ? base + "-" + size : "";
  const btnOutLine = color && outline ? base + "-outline-" + color : "";
  const btnColor = btnOutLine ? "" : color && base + "-" + color;

  let finalClass = "";
  finalClass = finalClass + (base ? " " + base : "");

  finalClass = finalClass + (btnsize ? " " + btnsize : "");
  finalClass = finalClass + (btnOutLine ? " " + btnOutLine : "");
  finalClass = finalClass + (btnColor ? " " + btnColor : "");
  finalClass = finalClass + (clsName ? " " + clsName : "");

  return (
    <>
      <button
        className={finalClass.trim()}
        disabled={disabled}
        onClick={() => {
          onclick;
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
