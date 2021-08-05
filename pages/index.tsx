import Image from "next/image";
import Head from "next/head";
import styles from "./index.module.css";
import About from "../components/home/About";

export default function Home() {
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
        <div className="container">
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
        </div>
      </main>
    </div>
  );
}
