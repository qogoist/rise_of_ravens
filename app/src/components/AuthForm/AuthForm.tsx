import React from "react";
import Button from "../Button";
import FormInput from "../FormInput";
import styles from "./AuthForm.module.css";

type Props = {
  className?: string;
  type: "login" | "signup";
};

const AuthForm: React.FC<Props> = ({ className, type }) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    //TODO: Actual functionality here :)
  };

  return (
    <form className={`${styles.auth} ${className ? className : ""}`} onSubmit={handleFormSubmit}>
      <FormInput type="text" name="username" placeholder="Nutzername" required={true} />
      {type === "signup" && (
        <FormInput type="email" name="email" placeholder="Email" required={true} />
      )}
      <FormInput type="password" name="password" placeholder="Passwort" required={true} />
      {type === "signup" && (
        <FormInput
          type="password"
          name="password-repeat"
          placeholder="Passwort Bestätigen"
          required={true}
        />
      )}
      <Button type="submit">{type === "signup" ? "Profil Erstellen" : "Einloggen"}</Button>
    </form>
  );
};

export default AuthForm;
