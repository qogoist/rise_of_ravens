import React from "react";
import styles from "./FormInput.module.css";

type Props = {
  className?: string;
  id?: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
};

const FormInput: React.FC<Props> = ({
  className,
  id,
  type,
  name,
  placeholder,
  required = false,
  disabled = false,
  value,
}) => {
  return (
    <input
      className={`${styles.input} ${className ? className : ""}`}
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default FormInput;
