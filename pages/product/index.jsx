import React from "react";
import ProductCard from "../../components/Product/productCard/ProductCard";
import ProductHeader from "../../components/Product/productHeader/ProductHeader";
import Head from "next/head";
import Layout from "../../components/Layout";

function index() {
  return (
    <>
      <div className="product">
        <Head>
          <title>PancaEkawiraSanjaya</title>
          <link rel="icon" href="/iconBrand.svg" />
          <meta name="Product" content="" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </Head>

        <Layout>
          <div className="productHeader">
            <ProductHeader />
          </div>

          <div className="productContainer">
            <ProductCard />
          </div>
        </Layout>
      </div>
    </>
  );
}

export default index;
