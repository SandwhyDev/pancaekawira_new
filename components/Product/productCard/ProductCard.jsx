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
        <h1>OUR SERVICE</h1>
        <div className={styles.productCard}>
          <div
            className={styles.card1}
            onClick={() => {
              handleClick("/product/detail/roof");
            }}
          >
            <div className={styles.imgCard}>
              <div className={styles.textCard}>
                <h1>ROOF</h1>
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
              handleClick("/product/detail/facade");
            }}
          >
            <div className={styles.imgCard}>
              <div className={styles.textCard}>
                <h1>FACADE</h1>
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

        <div className={styles.productCard}>
          {/* PEMBATAS */}
          <div className={styles.card1}>
            <div className={styles.imgCard}>
              <div className={styles.textCard}>
                <h1>WALL</h1>
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
                <h1>FLOOR</h1>
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
