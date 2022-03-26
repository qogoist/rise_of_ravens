import React from "react";
import styles from "./FormInput.module.css";

type Props = {
  className?: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  required?: boolean;
};

const FormInput: React.FC<Props> = ({ className, type, name, placeholder, required }) => {
  return (
    <input
      className={`${styles.input} ${className ? className : ""}`}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default FormInput;
