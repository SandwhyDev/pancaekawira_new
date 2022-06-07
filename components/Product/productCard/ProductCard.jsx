import React from "react";
import Image from "next/image";
import styles from "../../../styles/ProductCard.module.css";

function ProductCard() {
  const handleClick = (url) => {
    window.location.href = `${url}`;
  };

  return (
    <>
      <div className={styles.productCardHeader}>
        <h3>OUR SERVICE</h3>
        <div className={styles.productCard}>
          <div
            className={styles.card1}
            onClick={() => {
              handleClick("/product/detail/distribution");
            }}
          >
            <div className={styles.imgCard}>
              <div className={styles.textCard}>
                <h3>Distribution</h3>
              </div>
              <Image
                src="/Assets/roof.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {/* PEMBATAS */}

          <div
            className={styles.card1}
            onClick={() => {
              handleClick("/product/detail/construction");
            }}
          >
            <div className={styles.imgCard}>
              <div className={styles.textCard}>
                <h3>Construction</h3>
              </div>
              <Image
                src="/Assets/facade.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {/* PEMBATAS */}
        </div>

        <div
          className={styles.productCard}
          onClick={() => {
            handleClick("/product/detail/installation");
          }}
        >
          {/* PEMBATAS */}
          <div className={styles.card1}>
            <div className={styles.imgCard}>
              <div className={styles.textCard}>
                <h3>Installation</h3>
              </div>
              <Image
                src="/Assets/wall.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.card1}>
            <div className={styles.imgCard}>
              <div className={styles.textCard}>
                <h3>Furniture</h3>
              </div>
              <Image
                src="/Assets/floor.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {/* PEMBATAS */}
        </div>

        <img className={styles.logo_bg} src="/Assets/big_logo.png" />
      </div>
    </>
  );
}

export default ProductCard;
