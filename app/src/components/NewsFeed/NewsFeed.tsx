import React from "react";
import styles from "./NewsFeed.module.css";
import Article from "../Article";

type Props = {
  articles: Article[];
};

const NewsFeed: React.FC<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => {
        return <Article key={index} article={article} />;
      })}
    </div>
  );
};

export default NewsFeed;
