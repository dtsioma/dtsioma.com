import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  icon: IconDefinition;
  colorHex: string;
}

const Card: FC<CardProps> = ({ title, icon, colorHex }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardHeader} style={{ color: colorHex }}>
        <span className={styles.IconWrapper}>
          <FontAwesomeIcon icon={icon} className={styles.Icon} />
        </span>
        <span className={styles.Title}>{title}</span>
        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles.Arrow} />
      </div>
    </div>
  );
};

export default Card;
