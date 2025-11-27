import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const Button = ({
  btnTitle,
  btnIcon,
  bgColor,
  btnTitle2,
  disabled,
  iconColor,
  type,
  onClick,
  link,
  textColor,
}) => {
  const commonClassName = `${styles.btnWrapper} btn d-flex align-items-center justify-content-center text-center gap-2`;
  const commonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    cursor: "pointer",
  };
  return (
    <>
      {link ? (
        <a className={commonClassName} href={link} style={commonStyle}>
          {btnTitle ? <span className="m-0">{btnTitle}</span> : ""}
          {btnIcon && (
            <DynamicIcon name={btnIcon} color={iconColor} size={18} />
          )}
          {btnTitle2 ? <span className="m-0">{btnTitle2}</span> : ""}
        </a>
      ) : (
        <button
          disabled={disabled}
          onClick={!disabled ? onClick : undefined}
          type={type ? type : "button"}
          className={commonClassName}
          style={commonStyle}
        >
          {btnTitle ? <h6>{btnTitle}</h6> : ""}
          {btnIcon && (
            <DynamicIcon name={btnIcon} color={iconColor} size={18} />
          )}
          {btnTitle2 ? <h6>{btnTitle2}</h6> : ""}
        </button>
      )}
    </>
  );
};

export default Button;
