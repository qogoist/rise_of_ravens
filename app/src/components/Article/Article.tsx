import React from "react";
import styles from "./Article.module.css";
import ProfilePicture from "../ProfilePicture";
import Button from "../Button";

type Props = {
  article: Article;
};

const Article: React.FC<Props> = ({ article }) => {
  return (
    <div className={styles.container}>
      <ProfilePicture className={styles.icon} round={true} fill="#801d1f" />
      <h3>{article.name}</h3>
      <div className={styles.content}>{article.content}</div>
      <Button btnType="link">LIKE</Button>
    </div>
  );
};

export default Article;
