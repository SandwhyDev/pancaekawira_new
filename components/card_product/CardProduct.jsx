import React from "react";
import styles from "../../styles/cardP.module.css";
const CardProduct = ({ img = "https://picsum.photos/seed/150/300" }) => {
  return (
    <div className={styles.card_product}>
      <img src={img} alt="pancaekawirasanjaya" />
    </div>
  );
};

export default CardProduct;
