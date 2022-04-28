type GameState = {
  leader: Player;
  articles: Article[];
};

type Player = {
  email: string;
  password: string;
  character: Character;
};

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
  type: string;
  display: string;
};

type ListItem = WorldEvent | Task | Follower;
type ListItemTypes = "WorldEvent" | "Task" | "Follower";

type WorldEvent = {
  name: string;
  description: string;
  tasks: Task[];
};

type Project = WorldEvent & {};

type ProjectBlueprint = Project & {
  possibleTasks: Task[];
};

type Task = {
  name: string;
  description: string;
  participants: Follower[];
};

type Character = {
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

type Follower = Character & {};

type Strength = {
  type: "media" | "social" | "computers" | "combat";
  speciality: string | null;
};
