import React from "react";
import Image from "next/image";
import styles from "../../../styles/ProductHeader.module.css";

function ProductHeader() {
  return (
    <div className={styles.productHeader}>
      <div className={styles.darkEffect}>
        <div className={styles.productTextHeader}>
          <h1>PRODUCT</h1>
        </div>
      </div>
      <Image
        src="/Assets/product_hero.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default ProductHeader;
