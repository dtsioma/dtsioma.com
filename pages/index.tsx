import Image from "next/image";
import Head from "next/head";
import styles from "./index.module.css";

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
      <main>
        {/* <h1>Home Page</h1> */}
        {/* <div className={styles.PhotoWrapper}>
          <Image
            src="/images/me.jpg"
            blurDataURL="/images/me_small.jpg"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div> */}
      </main>
    </div>
  );
}
