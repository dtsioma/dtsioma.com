import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import About from "../components/home/About";
import Card from "../components/home/Card";
import {
  faCode,
  faPaintBrush,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../components/general/Container";
import Row from "../components/general/Row";
import styles from "./index.module.css";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Daniil Tsioma</title>
        <meta
          name="description"
          content="Front End Developer in Happy Valley, OR"
        />
      </Head>
      <main className={styles.Main}>
        <Container>
          <Row>
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
          </Row>
          <div className={styles.CardWrapper}>
            <Row>
              <Link href="/tech">
                <Card title="technologies" icon={faCode} colorHex="#3f51b5" />
              </Link>
            </Row>
            <Row>
              <Link href="/projects">
                <Card title="projects" icon={faPaintBrush} colorHex="#e91e63" />
              </Link>
            </Row>
            <Row>
              <Link href="/contact">
                <Card
                  title="contact me"
                  icon={faPaperPlane}
                  colorHex="#009688"
                />
              </Link>
            </Row>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;
