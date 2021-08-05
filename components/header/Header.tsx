import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const githubUrl = "https://github.com/dtsioma";
  const linkedInUrl = "https://www.linkedin.com/in/dtsioma/";

  return (
    <>
      <header className={styles.Header}>
        <div className="container justify-content-between">
          <span className={styles.Name}>Daniil Tsioma</span>
          <div className={styles.Buttons}>
            <a href={linkedInUrl} className={styles.Button}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={githubUrl} className={styles.Button}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}