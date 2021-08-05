import { FC } from "react";
import styles from "./Heading.module.css";

interface HeadingProps {
  children: JSX.Element | string;
  colorName: string;
  centered?: boolean;
}

const Heading: FC<HeadingProps> = ({ children, colorName, centered }) => {
  return (
    <h1
      className={styles.Heading}
      style={{
        color: `var(--${colorName}-color)`,
        textAlign: centered ? "center" : "left",
      }}
    >
      {children}
    </h1>
  );
};

export default Heading;
