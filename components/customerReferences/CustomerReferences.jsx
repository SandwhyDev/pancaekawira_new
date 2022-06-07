import Image from "next/image";
import Logo from "../public/Assets/Brand.png";
import styles from "../../styles/CustomerReferences.module.css";

const CustomerReferences = () => {
  return (
    <div className={styles.customerReferences}>
      <h1>OUR CUSTOMER REFERENCES</h1>
      <div className={styles.decoration}></div>
      <div className={styles.imgContainerBusiness}>
        <div className={styles.imgContainerBottom}>
          <div className={styles.logo_customer}>
            {/* <Image
              src={Logo}
              alt="Picture of the author"
              width={300}
              height="auto"
            /> */}
          </div>
          <div className={styles.logo_customer}>
            {/* <Image
              src="/SINARMASLAND_logo.png"
              alt="Picture of the author"
              width={300}
              height="auto"
            /> */}
          </div>
          <div className={styles.logo_customer}>
            {/* <Image
              src="/takenaka_logo.jpg"
              alt="Picture of the author"
              width={300}
              height="auto"
            /> */}
          </div>
          <div className={styles.logo_customer}>
            {/* <Image
              src="/waskita_logo.jpeg"
              alt="Picture of the author"
              width={300}
              height="auto"
            /> */}
          </div>
          <div className={styles.logo_customer}>
            {/* <Image
              src="/wika_logo.png"
              alt="Picture of the author"
              width="300px"
              height="auto"
            /> */}
          </div>
          <div className={styles.logo_customer}>
            {/* <Image
              src="/CSCOD_logo.png"
              alt="Picture of the author"
              width="10000px"
              height="auto"
            /> */}
          </div>
        </div>
      </div>
      <div className={styles.forMarginBottomHome}>{/*Jangan dihapus*/}</div>
    </div>
  );
};

export default CustomerReferences;
