import React from "react";
import ChatInput from "../ChatInput";
import NewsFeed from "../NewsFeed";
import styles from "./Home.module.css";

type Props = {};

const placeholderArticles = [
  {
    name: "Some Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non atque, error nobis id, dignissimos quas velit magni aut beatae nemo ex. Perspiciatis assumenda repellat dignissimos aperiam vero illo delectus id enim! Illum possimus impedit nihil excepturi praesentium obcaecati explicabo deleniti fugit, earum laudantium enim accusantium amet recusandae natus nesciunt.",
    poster: "Member 1",
    likes: 20,
  },
  {
    name: "Some Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio maiores, explicabo dolore consectetur quos accusantium animi numquam sequi deserunt nam aut consequatur sapiente labore perferendis esse beatae facilis officiis sed ipsum facere laboriosam veniam optio odit? Excepturi eos sapiente hic atque minima quaerat sequi, quidem dolorum doloremque ab officiis impedit explicabo consequuntur, optio ut laudantium ipsa ea a quod at eaque et autem? Porro omnis dolorum fugiat rerum? Ipsam recusandae esse animi fugiat odit repudiandae excepturi quae, magnam deleniti consectetur magni eius perspiciatis obcaecati repellat maiores vel necessitatibus reprehenderit consequatur dolorum voluptates eos. Quod corrupti nemo ipsa labore. In.",
    poster: "Member 1",
    likes: 20,
  },
  {
    name: "Some Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio maiores, explicabo dolore consectetur quos accusantium animi numquam sequi deserunt nam aut consequatur sapiente labore perferendis esse beatae facilis officiis sed ipsum facere laboriosam veniam optio odit? Excepturi eos sapiente hic atque minima quaerat sequi, quidem dolorum doloremque ab officiis impedit explicabo consequuntur, optio ut laudantium ipsa ea a quod at eaque et autem? Porro omnis dolorum fugiat rerum? Ipsam recusandae esse animi fugiat odit repudiandae excepturi quae, magnam deleniti consectetur magni eius perspiciatis obcaecati repellat maiores vel necessitatibus reprehenderit consequatur dolorum voluptates eos. Quod corrupti nemo ipsa labore. In.",
    poster: "Member 1",
    likes: 20,
  },
  {
    name: "Some Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio maiores, explicabo dolore consectetur quos accusantium animi numquam sequi deserunt nam aut consequatur sapiente labore perferendis esse beatae facilis officiis sed ipsum facere laboriosam veniam optio odit? Excepturi eos sapiente hic atque minima quaerat sequi, quidem dolorum doloremque ab officiis impedit explicabo consequuntur, optio ut laudantium ipsa ea a quod at eaque et autem? Porro omnis dolorum fugiat rerum? Ipsam recusandae esse animi fugiat odit repudiandae excepturi quae, magnam deleniti consectetur magni eius perspiciatis obcaecati repellat maiores vel necessitatibus reprehenderit consequatur dolorum voluptates eos. Quod corrupti nemo ipsa labore. In.",
    poster: "Member 1",
    likes: 20,
  },
  {
    name: "Some Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio maiores, explicabo dolore consectetur quos accusantium animi numquam sequi deserunt nam aut consequatur sapiente labore perferendis esse beatae facilis officiis sed ipsum facere laboriosam veniam optio odit? Excepturi eos sapiente hic atque minima quaerat sequi, quidem dolorum doloremque ab officiis impedit explicabo consequuntur, optio ut laudantium ipsa ea a quod at eaque et autem? Porro omnis dolorum fugiat rerum? Ipsam recusandae esse animi fugiat odit repudiandae excepturi quae, magnam deleniti consectetur magni eius perspiciatis obcaecati repellat maiores vel necessitatibus reprehenderit consequatur dolorum voluptates eos. Quod corrupti nemo ipsa labore. In.",
    poster: "Member 1",
    likes: 20,
  },
];

const Home: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <h1>News Feed</h1>
      <NewsFeed articles={placeholderArticles} />
      <ChatInput />
    </div>
  );
};

export default Home;
