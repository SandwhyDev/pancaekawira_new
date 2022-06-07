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
          content="Distribution from PT. Panca Ekawira Snajaya"
        />
        <meta name="title" content="Distribution PT.Panca Ekawira Sanjaya" />
        <title>Distribution</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <h1>Distribution</h1>

          <div className={styles.container_card_product}>
            <CardProduct img={"/Assets/logoPerusahaan/logo-mu.png"} />
            <CardProduct img={"/Assets/logoPerusahaan/logo-weber.png"} />
            <CardProduct img={"/Assets/logoPerusahaan/logoMilan.png"} />
            <CardProduct img={"/Assets/logoPerusahaan/logoPaldeco.png"} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
