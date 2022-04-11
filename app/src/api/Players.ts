import { placeholderFollower } from "../helper/placeholders";

export const getPlayerData = (id: string): Follower => {
  const data: Follower = placeholderFollower.filter(follower => follower.id === id)[0];

  return data;
};
