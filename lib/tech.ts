export const getTechnologies = () => {
  return technologies;
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
    icon: "logos:javascript",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    id: "react",
    title: "React",
    icon: "logos:react",
  },
  {
    id: "nodejs",
    title: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: "teenyicons:nextjs-outline",
  },
  {
    id: "graphql",
    title: "GraphQL",
    icon: "logos:graphql",
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
