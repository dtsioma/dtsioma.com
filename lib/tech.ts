export const getTechnologies = () => {
  return technologies;
};

export const getTechnologyIcon = (id: string) => {
  const { icon } = technologies.filter((tech) => tech.id === id)[0];
  return icon;
};

export interface Technology {
  id: string;
  title: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    id: "html",
    title: "HTML5",
    icon: "vscode-icons:file-type-html",
  },
  {
    id: "css",
    title: "CSS3",
    icon: "vscode-icons:file-type-css",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "vscode-icons:file-type-js-official",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: "vscode-icons:file-type-typescript-official",
  },
  {
    id: "react",
    title: "React",
    icon: "vscode-icons:file-type-reactjs",
  },
  {
    id: "nodejs",
    title: "Node.js",
    icon: "vscode-icons:file-type-node",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: "teenyicons:nextjs-outline",
  },
  {
    id: "graphql",
    title: "GraphQL",
    icon: "vscode-icons:file-type-graphql",
  },
  {
    id: "python",
    title: "Python",
    icon: "vscode-icons:file-type-python",
  },
  {
    id: "django",
    title: "Django",
    icon: "vscode-icons:file-type-django",
  },
];
