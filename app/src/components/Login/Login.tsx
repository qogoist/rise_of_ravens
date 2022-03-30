import React from "react";
import AuthForm from "../AuthForm";
import Card from "../Card";
import Logo from "../Logo";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  return (
    <div className={styles.page}>
      <Logo />
      <Card className={styles.login}>
        <AuthForm type="login" className={styles.form} />
      </Card>
    </div>
  );
};
export default Login;
