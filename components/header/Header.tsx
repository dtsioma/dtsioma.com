import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Container from "../general/Container";
import Row from "../general/Row";
import styles from "./Header.module.css";

const Header: FC = () => {
  const githubUrl = "https://github.com/dtsioma";
  const linkedInUrl = "https://www.linkedin.com/in/dtsioma/";

  return (
    <header className={styles.Header}>
      <Container>
        <Row className={styles.HeaderRow}>
          <span className={styles.Name}>Daniil Tsioma</span>
          <div className={styles.Buttons}>
            <a href={linkedInUrl} className={styles.Button}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={githubUrl} className={styles.Button}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
