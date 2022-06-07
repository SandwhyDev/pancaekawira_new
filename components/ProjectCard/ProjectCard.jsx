import styles from "../../styles/ProjectCard.module.css";

const ProjectCard = ({ title, img, body }) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.cardLefts}>
        <div className={styles.decorationCard1}>
          {/*Component kosong Jangan Dihapus */}
        </div>
        <img src={img} alt="Picture of the author" />
      </div>
      <div className={styles.cardRights}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
