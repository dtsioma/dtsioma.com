import { FC } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "./Preview.module.css";
import { getTechnologyIcon } from "../../../lib/tech";

interface PreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

const Preview: FC<PreviewProps> = ({
  title,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
  technologies,
}) => {
  return (
    <div className={styles.Preview}>
      <div className={styles.PreviewImage}>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="contain"
          className={styles.ProjectImage}
        />
      </div>
      <strong className={styles.Title}>{title}</strong>
      <p className={styles.Paragraph}>{description}</p>
      <div className={styles.Tech}>
        {technologies.map((techId, idx) => {
          const iconId = getTechnologyIcon(techId);
          return (
            <Icon
              key={`tech-${idx}-${techId}`}
              icon={iconId}
              width="20"
              height="20"
              className={styles.ProjectIcon}
            />
          );
        })}
      </div>
      <div className={styles.ProjectLinks}>
        <a href={liveUrl} target="_blank" className={styles.ProjectLink}>
          Website
        </a>
        <a href={githubUrl} target="_blank" className={styles.ProjectLink}>
          Github
        </a>
      </div>
    </div>
  );
};

export default Preview;
