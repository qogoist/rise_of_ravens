type ChatMessage = {
  sender: string;
  content: string; //TODO: Make this take any sort of content.
};

type ChatData = {
  name: string;
  members: string[];
  messages: ChatMessage[];
};

type Article = {
  name: string;
  content: string; //TODO: Make this take any sort of content.
  poster: string;
  likes: number;
};
