import styles from "./Container.module.css";

const Container: React.FC = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

export default Container;
