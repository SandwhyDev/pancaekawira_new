import React from "react";
import CardProduct from "../../../components/card_product/CardProduct";
import Layout from "../../../components/Layout";
import styles from "../../../styles/detail_product.module.css";

import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Product Facade from PT. Panca Ekawira Snajaya"
        />
        <meta name="title" content="Facede Products PT.Panca Ekawira Sanjaya" />
        <title>Facede Product</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <h1>Facade Product</h1>

          <div className={styles.container_card_product}>
            <CardProduct img={"/Assets/products/facade/penelux.jpg"} />
            <CardProduct img={"/Assets/products/facade/penelux_2.jpg"} />
            <CardProduct img={"/Assets/products/facade/penelux_3.jpg"} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
