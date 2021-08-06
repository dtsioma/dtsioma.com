import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import About from "../components/home/about/About";
import Card from "../components/home/card/Card";
import {
  faCode,
  faPaintBrush,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../components/general/container/Container";
import Row from "../components/general/row/Row";
import styles from "./css/index.module.css";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className="main">
      <Head>
        <title>Daniil Tsioma</title>
        <meta
          name="description"
          content="Front End Developer in Happy Valley, OR"
        />
      </Head>
      <Container>
        <Row className={styles.HomeRow}>
          <div className={styles.AboutWrapper}>
            <div className={styles.PhotoWrapper}>
              <Image
                src="/images/me.jpg"
                blurDataURL="/images/me_small.jpg"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
            <About />
          </div>
          <div className={styles.CardSection}>
            <Row>
              <Link href="/tech">
                <div className={styles.CardWrapper}>
                  <Card title="technologies" icon={faCode} colorName="tech" />
                </div>
              </Link>
            </Row>
            <Row>
              <Link href="/projects">
                <div className={styles.CardWrapper}>
                  <Card
                    title="projects"
                    icon={faPaintBrush}
                    colorName="projects"
                  />
                </div>
              </Link>
            </Row>
            <Row>
              <Link href="/contact">
                <div className={styles.CardWrapper}>
                  <Card
                    title="contact me"
                    icon={faPaperPlane}
                    colorName="contact-me"
                  />
                </div>
              </Link>
            </Row>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
