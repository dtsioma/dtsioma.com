import Head from "next/head";
import { FC } from "react";
import Container from "../components/general/container/Container";
import Row from "../components/general/row/Row";
import Heading from "../components/general/heading/Heading";
import Preview from "../components/projects/preview/Preview";
import { getProjects, Project } from "../lib/projects";
import styles from "./css/projects.module.css";

export const getStaticProps = () => {
  const projects = getProjects();
  return {
    props: {
      projects,
    },
  };
};

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <main className="main">
      <Head>
        <title>Projects /// Daniil Tsioma</title>
      </Head>
      <Container>
        <Heading colorName="projects" centered>
          Projects
        </Heading>
        <Row className={styles.ProjectsRow}>
          {projects.map((prj, idx) => (
            <Preview
              key={`project-${idx}-${prj.id}`}
              title={prj.title}
              description={prj.description}
              imageUrl={prj.imageUrl}
              liveUrl={prj.liveUrl}
              githubUrl={prj.githubUrl}
              technologies={prj.technologies}
            />
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Projects;
