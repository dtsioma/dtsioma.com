import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import Container from "../general/container/Container";
import Row from "../general/row/Row";
import styles from "./Header.module.css";

const Header: FC = () => {
  const githubUrl = "https://github.com/dtsioma";
  const linkedInUrl = "https://www.linkedin.com/in/dtsioma/";
  const { pathname } = useRouter();

  return (
    <header className={styles.Header}>
      <Container>
        <Row className={styles.HeaderRow}>
          <Link href="/" passHref>
            <span className={styles.Name}>
              <FontAwesomeIcon
                icon={faLongArrowAltLeft}
                style={{
                  width: pathname === "/" ? 0 : "auto",
                }}
                className={[
                  styles.Back,
                  pathname !== "/" && styles.MarginRight,
                ].join(" ")}
              />
              Daniil Tsioma
            </span>
          </Link>
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
