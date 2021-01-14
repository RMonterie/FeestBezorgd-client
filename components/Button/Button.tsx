import React from "react";

import "./Button.scss";

//All available style options for buttons
const STYLES = [
  "btn--primary--solid",
  "btn--secondary--solid",
  "btn--success--solid",
  "btn--danger--solid",
  "btn--add--solid",
];

//TODO: Find out the correct types for these props
interface ButtonProps {
  icon?: any;
  text?: string;
  style: string;
  onClick?: any;
  type?: any;
}

/**
 * Generic button component. Can be customized by specifying props.
 *
 * @returns {JSX.Element}
 */
const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  style,
  onClick,
  type,
}) => {
  const checkButtonStyle = STYLES.includes(style) ? style : STYLES[0];

  return (
    <button onClick={onClick} className={checkButtonStyle} type={type}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
