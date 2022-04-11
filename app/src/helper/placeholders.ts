export const placeholderFollower: Follower[] = [
  {
    id: "member1ID",
    name: "Member 1",
    rank: "Oberstabsfeldwebel",
    title: "Some Title",
    influence: 10,
    image: "",
    strengths: [],
    currentTask: null,
    tasks: [],
    activeSince: new Date(2022, 2, 12),
  },
  {
    id: "member2ID",
    name: "Member 2",
    rank: "Oberstabsfeldwebel",
    title: "Some Title",
    influence: 20,
    image: "",
    strengths: [],
    currentTask: null,
    tasks: [],
    activeSince: new Date("2022-04-07T13:00"),
  },
  {
    id: "member3ID",
    name: "Member 3",
    rank: "Oberstabsfeldwebel",
    title: "Some Title",
    influence: 30,
    image: "",
    strengths: [],
    currentTask: null,
    tasks: [],
    activeSince: new Date(),
  },
];

export const placeholderTasks: Task[] = [
  {
    name: "Task 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eos!",
    participants: [placeholderFollower[0], placeholderFollower[2]],
  },
  {
    name: "Task 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eos!",
    participants: [placeholderFollower[2], placeholderFollower[1]],
  },
  {
    name: "Task 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eos!",
    participants: [placeholderFollower[0], placeholderFollower[1]],
  },
];

export const placeholderEvents = [
  {
    name: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius rerum possimus, labore maxime at debitis optio deserunt nemo. Facere.",
    tasks: [placeholderTasks[0], placeholderTasks[2]],
  },
  {
    name: "Event 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius rerum possimus, labore maxime at debitis optio deserunt nemo. Facere.",
    tasks: [placeholderTasks[1], placeholderTasks[2]],
  },
  {
    name: "Event 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius rerum possimus, labore maxime at debitis optio deserunt nemo. Facere.",
    tasks: [placeholderTasks[1], placeholderTasks[0]],
  },
];

export const placeholderData: Follower = {
  id: "selfID",
  name: "Max Mustermann",
  rank: "Some Rank",
  title: "Some Title",
  image: "",
  influence: 1234567,
  strengths: [
    { type: "Stärke 1", speciality: null },
    { type: "Stärke 2", speciality: "Ausprägung XY" },
  ],
  currentTask: null,
  tasks: placeholderTasks,
  activeSince: new Date(),
};
