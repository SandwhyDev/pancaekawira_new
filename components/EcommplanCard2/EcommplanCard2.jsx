import styles from "../../styles/EcommplanCard2.css";

const EcommplanCard2 = () => {
  return (
    <section className={styles.ecommplanCard2}>
      <div className={styles.topPlannCard2}>
        <div className={styles.leftPlannCard2}>
          <img src="./Assets/plann1.png" alt="" />
        </div>
        <div className={styles.rightPlannCard2}>
          <h3>Lorem Ipsum Dolor</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus culpa, vitae molestias corrupti, dignissimos dolores
            harum rem,
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommplanCard2;
