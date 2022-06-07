import React from "react";
import Image from "next/image";
// import logo from "../../../public/Assets/Brand.png";
import styles from "../../../styles/CompanyContainer.module.css";

function CompanyContainer() {
  return (
    <div className={styles.companyContainer}>
      <img
        className={styles.logo_bg}
        src="/Assets/big_logo.png"
        alt="pancaekawirasanjaya"
      />

      {/* <Image src={"/Assets/Brand.png"} width={100} height={100} /> */}

      <div className={styles.companyIsi}>
        <h2 className={styles.companyIsiHeader}>ABOUT US</h2>

        <p>
          Established in Jakarta, Indonesia in 2018, PT. Panca Ekawira Sanjaya
          was founded by professionals with years of experience in supplying and
          distributing building materials and providing construction services.
        </p>

        <p>
          The basic function of the company is as a source in distributing
          building materials and construction services throughout Indonesia. The
          essence of our business today is to assist clients in the supply of
          goods and providing the best solution on the needs of the products to
          be used and ensure the products we supply are the best in their field.
          Our experience team is committed to working responsibly to meet the
          needs of clients with reliable experience gained from our principles.
        </p>
      </div>
    </div>
  );
}

export default CompanyContainer;
