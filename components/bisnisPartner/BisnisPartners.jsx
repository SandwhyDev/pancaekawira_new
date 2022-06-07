import Image from "next/image";
import styles from "../../styles/BisnisPartners.module.css";
const BusinessPartner = () => {
  return (
    <div className={styles.businessPartners}>
      <h1>OUR BUSINESS PARTNERS</h1>
      <div className={styles.decoration}></div>
      <div className={styles.imgContainerBusiness}>
        <div className={styles.imgContainerBottom}>
          <div className={styles.gambarBawah}>
            <Image
              src="/Shera.svg"
              alt="Picture of the author"
              width="300px"
              height="300px"
            />
          </div>

          <div className={styles.mortar}>
            <Image
              src="/mortarUtama.svg"
              alt="Picture of the author"
              width="150px"
              height="150px"
            />
            <Image
              src="/weber.svg"
              alt="Picture of the author"
              width="300px"
              height="300px"
            />
          </div>

          <div className={styles.gambarBawah && styles.foles}>
            <img
              className={styles.milan}
              src="/utomo.png"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className={styles.forMarginBottomHome}>{/*Jangan dihapus*/}</div>
    </div>
  );
};

export default BusinessPartner;
