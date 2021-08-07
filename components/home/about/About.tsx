import { FC } from "react";
import styles from "./About.module.css";

const About: FC = () => {
  return (
    <>
      <h2 className={styles.Heading}>about me</h2>
      <p>
        19 y.o. Ukrainian dude living in Portland, OR. Computer Science freshman
        in Portland State University.
      </p>
      <p>
        My web developer journey started in high school. At the time, I was
        digging my way through the coal mines of freelance WordPress
        development. Finally, I spotted the light at the{" "}
        <i className={styles.IthoughtIvasInvisible}>front</i> end. That is where
        I headed.
      </p>
      <p>
        With three years of experience under my belt, I am excited to enter this
        new chapter.
      </p>
    </>
  );
};

export default About;
