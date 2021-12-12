import { FC } from "react";
import styles from "./About.module.css";

const About: FC = () => {
  return (
    <>
      <h2 className={styles.Heading}>about me</h2>
      <p>
        Hi, I am Daniil, and I live in Portland, Oregon. I am a Front End Web
        developer and am currently studying Computer Science at Portland
        University.
        <p>
          My goal is to develop products with user experience in mind. To create
          this pleasant experience, I invest my time in both Front End and Back
          end implementation to insure perfection in every part of the code.
        </p>
      </p>
    </>
  );
};

export default About;
