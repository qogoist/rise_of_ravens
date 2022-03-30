type ChatMessage = {
  sender: string;
  content: string; //TODO: Make this take any sort of content.
};

type ChatData = {
  name: string;
  members: string[];
  messages: ChatMessage[];
  unread: number;
};

type Article = {
  name: string;
  content: string; //TODO: Make this take any sort of content.
  poster: string;
  likes: number;
};

type Categories = {
  type: "events" | "projects";
  display: string;
};

type ListItem = WorldEvent | Task | Follower;
type ListItemTypes = "WorldEvent" | "Task" | "Follower";

type WorldEvent = {
  name: string;
  description: string;
  tasks: Task[];
};

type Task = {
  name: string;
  description: string;
  participants: Follower[];
};

type Follower = {
  name: string;
  rank: string;
  image: string;
};
