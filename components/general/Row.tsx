import styles from "./Row.module.css";

interface RowProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Row: React.FC<RowProps> = ({ children, className }) => {
  return <div className={[styles.Row, className].join(" ")}>{children}</div>;
};

export default Row;
