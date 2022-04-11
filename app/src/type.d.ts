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
  type: "events" | "projects" | "follower";
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
  id: string;
  name: string;
  rank: string;
  title: string;
  image: string;
  influence: number;
  strengths: Strength[];
  currentTask: Task | null;
  tasks: Task[];
  activeSince: Date;
};

type Strength = {
  type: string;
  speciality: string | null;
};
