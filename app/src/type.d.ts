type ChatMessage = {
  sender: string;
  content: string;
};

type ChatData = {
  name: string;
  members: string[];
  messages: ChatMessage[];
};
