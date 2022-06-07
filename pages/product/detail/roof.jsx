import React from "react";
import CardProduct from "../../../components/card_product/CardProduct";
import Layout from "../../../components/Layout";
import "./detail_product.css";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Product Roof from PT. Panca Ekawira Snajaya"
        />
        <meta name="title" content="Roof Products PT.Panca Ekawira Sanjaya" />
        <title>Roof Product</title>
      </Head>
      <Layout>
        <div className="container">
          <h1>Roof Product</h1>

          <div className="container_card_product">
            <CardProduct img={"/Assets/products/atap/atap_2.jpg"} />
            <CardProduct img={"/Assets/products/atap/atap_final.jpg"} />
            <CardProduct img={"/Assets/products/atap/clading.jpg"} />
            <CardProduct img={"/Assets/products/atap/flashing.jpg"} />
            <CardProduct img={"/Assets/products/atap/langsir_material.jpg"} />
            <CardProduct
              img={"/Assets/products/atap/proses_pengerjaan_2.jpg"}
            />
            <CardProduct img={"/Assets/products/atap/proses_pengerjaan.jpg"} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
