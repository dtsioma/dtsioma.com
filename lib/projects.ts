export const getProjects = () => {
  return projects;
};

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "react-notesapp",
    title: "Notes App",
    description:
      "For my first React project, I decided to create basic app for making notes.",
    imageUrl: "/images/notesapp.jpg",
    liveUrl: "https://dtsioma-notesapp.herokuapp.com",
    githubUrl: "https://github.com/dtsioma/notesapp",
    technologies: ["react", "graphql"],
  },
  {
    id: "react-pogoda",
    title: "Pogoda",
    description:
      "Application for getting weather forecast for today and next week.",
    imageUrl: "/images/pogoda.jpg",
    liveUrl: "https://dtsioma-pogoda.herokuapp.com",
    githubUrl: "https://github.com/dtsioma/pogoda",
    technologies: ["react"],
  },
  {
    id: "react-quizgame",
    title: "Quiz Game",
    description:
      "Guess as many states by their shapes as you can, in a limited time.",
    imageUrl: "/images/quizgame.jpg",
    liveUrl: "https://master.d2h20q6weo0hz6.amplifyapp.com",
    githubUrl: "https://github.com/dtsioma/quiz-game",
    technologies: ["react"],
  },
];
