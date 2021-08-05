import styles from "./Button.module.css";

interface ButtonProps {
  children: JSX.Element | string;
  clicked?: () => void;
  colorName: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  clicked,
  colorName,
}) => {
  return (
    <button
      className={styles.Button}
      onClick={clicked}
      style={{ backgroundColor: `var(--${colorName}-color)` }}
    >
      {children}
    </button>
  );
};
