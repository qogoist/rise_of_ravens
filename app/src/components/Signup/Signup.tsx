import React from "react";
import AuthForm from "../AuthForm";
import Card from "../Card";
import Logo from "../Logo";
import ProfilePicture from "../ProfilePicture";
import ProfilePictureGallery from "../ProfilePictureGallery";
import styles from "./Signup.module.css";

const Signup: React.FC = () => {
  return (
    <div className={styles.page}>
      <Logo />
      <Card className={styles.signup}>
        <ProfilePicture className={styles.profile} />
        <ProfilePictureGallery className={styles.gallery} />
        <AuthForm type="signup" className={styles.form} />
      </Card>
    </div>
  );
};
export default Signup;
