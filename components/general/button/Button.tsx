import styles from "./Button.module.css";

interface ButtonProps {
  children: JSX.Element | string;
  clicked?: () => void;
  colorName: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  clicked,
  colorName,
  type,
}) => {
  return (
    <button
      className={styles.Button}
      onClick={clicked}
      style={{ backgroundColor: `var(--${colorName}-color)` }}
      type={type || "button"}
    >
      {children}
    </button>
  );
};
