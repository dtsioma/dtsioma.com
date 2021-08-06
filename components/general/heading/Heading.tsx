import { FC } from "react";
import styles from "./Heading.module.css";

interface HeadingProps {
  children: JSX.Element | string;
  colorName: string;
  centered?: boolean;
  headingClass?: string;
}

const Heading: FC<HeadingProps> = ({
  children,
  colorName,
  centered,
  headingClass,
}) => {
  return (
    <h1
      className={[styles.Heading, headingClass || ""].join(" ")}
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
