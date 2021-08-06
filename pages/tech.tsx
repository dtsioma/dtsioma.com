import { FC, useState } from "react";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { getTechnologies, Technology } from "../lib/tech";
import Container from "../components/general/container/Container";
import Row from "../components/general/row/Row";
import Heading from "../components/general/heading/Heading";
import styles from "./css/tech.module.css";
import { Button } from "../components/general/button/Button";

export const getStaticProps = async () => {
  const technologies = getTechnologies();
  return {
    props: {
      technologies,
    },
  };
};

interface TechProps {
  technologies: Technology[];
}

const Tech: FC<TechProps> = ({ technologies }) => {
  const [showFullList, setShowFullList] = useState<boolean>(false);

  return (
    <main className="main">
      <Head>
        <title>Technologies I use /// Daniil Tsioma</title>
      </Head>
      <Container>
        <Heading colorName="tech" centered headingClass={styles.TechHeading}>
          Technologies
        </Heading>
        <Row className={styles.TechRow}>
          {technologies.slice(0, 8).map((tech, idx) => (
            <div className={styles.TechWrapper} key={`tech-${idx}-${tech.id}`}>
              <Icon icon={tech.icon} className={styles.TechIcon} />
              <span className={styles.Title}>{tech.title}</span>
            </div>
          ))}
        </Row>
        {showFullList && (
          <Row className={styles.TechRow}>
            {technologies.slice(8).map((tech, idx) => (
              <div
                className={styles.TechWrapper}
                key={`tech-${idx}-${tech.id}`}
              >
                <Icon icon={tech.icon} className={styles.TechIcon} />
                <span className={styles.Title}>{tech.title}</span>
              </div>
            ))}
          </Row>
        )}
        {technologies.length > 8 && (
          <Row className={styles.TechButtonRow}>
            <Button
              colorName="tech"
              clicked={() => {
                setShowFullList((curr) => !curr);
              }}
            >
              {!showFullList ? "Show more" : "Show less"}
            </Button>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default Tech;
