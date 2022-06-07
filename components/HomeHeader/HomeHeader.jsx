import Image from "next/image";
import styles from "../../styles/HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <div className={styles.headerImgContainer}>
      <div className={styles.heroText}>
        <h1>PANCA EKAWIRA SANJAYA</h1>
        <h3>DISTRIBUTION & CONSTRUCTION COMPANY IN INDONESIA</h3>
      </div>
      <Image
        src="/Assets/hero.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default HomeHeader;
