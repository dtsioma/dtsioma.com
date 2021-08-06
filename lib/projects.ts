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
];
