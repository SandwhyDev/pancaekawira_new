import React from "react";
import styles from "../../styles/Company.module.css";
import Image from "next/image";

function CompanyHeader() {
  return (
    <div className={styles.companyHeader}>
      <div className={styles.darkEffect}>
        <div className={styles.companyTextHeader}>
          <h1>COMPANY PROFILE</h1>
        </div>
      </div>
      <Image
        src="/Assets/imgCompany.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default CompanyHeader;
