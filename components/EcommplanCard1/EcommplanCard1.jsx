import styles from "../../styles/EcommplanCard1.css";

const EcommplanCard1 = () => {
  return (
    <section className={styles.ecommplanCard1}>
      <div className={styles.topPlannCard1}>
        <div className={styles.leftPlannCard1}>
          <img src="./Assets/plann1.png" alt="" />
        </div>
        <div className={styles.rightPlannCard1}>
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

export default EcommplanCard1;
