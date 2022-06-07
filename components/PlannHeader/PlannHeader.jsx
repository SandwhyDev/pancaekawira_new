import Image from "next/image";
import styles from "../../styles/PlannHeader.module.css";
const PlannHeader = () => {
  return (
    <div className={styles.headerImgContainerPlann}>
      <div className={styles.heroTextPlann}>
        <h1>Ecommerce Plan</h1>
      </div>
      <Image
        src="/Assets/comhero.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default PlannHeader;
