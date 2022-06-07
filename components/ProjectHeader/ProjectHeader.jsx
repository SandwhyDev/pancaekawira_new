import styles from "../../styles/ProjectHeader.module.css";

const ProjectHeader = () => {
  return (
    <div className={styles.headerImgContainerProject}>
      <div className={styles.heroTextProject}>
        <h1>Project</h1>
      </div>
      <img
        src="/Assets/project_hero.jpg"
        alt="Picture of the author"
        className={styles.imgHeader}
      />
    </div>
  );
};

export default ProjectHeader;
