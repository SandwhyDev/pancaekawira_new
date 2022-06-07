import React from "react";
import "./style.css";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import FormOrderCard from "../../components/formOrderCard/FormOrderCard";
import formOrder from "../api/formOrder.json";

const FormOrder = ({ id }) => {
  return (
    <>
      <Head>
        <title>PancaEkawiraSanjaya</title>
        <link rel="icon" href="/iconBrand.svg" />
        <meta name="Company Profile" content="" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <Navbar />

      <div className="formOrder">
        <FormOrderCard data={formOrder.katalog[id]} />
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      id: ctx.query.id,
    },
  };
}

export default FormOrder;
