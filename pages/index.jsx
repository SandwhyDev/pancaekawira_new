import Head from "next/head";
import "./Home.module.css";
import styles from "./Home.module.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeCard1 from "../components/HomeCard1/HomeCard1";
import HomeServices from "../components/HomeServices/HomeServices";
import HomeCard2 from "../components/HomeCard2/HomeCard2";
import VisiMisi from "../components/VisiMisi/VisiMisi";
import BusinessPartner from "../components/bisnisPartner/BisnisPartners";
import CompanyContainer from "../components/CompanyProfile/companyContainer.jsx/CompanyContainer";
import Image from "next/image";
import CustomerReferences from "../components/customerReferences/CustomerReferences";
// import bigLogo from "../public/Assets/big_logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>PancaEkawiraSanjaya</title>
        <link rel="icon" href="/iconBrand.svg" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        ></link>
        <meta
          name="description"
          content="Established in Jakarta, Indonesia in 2018, PT. Panca Ekawira Sanjaya was founded by professionals with years of experience in supplying and distributing building materials and providing construction services.

          The basic function of the company is as a source in distributing building materials and construction services throughout Indonesia. The essence of our business today is to assist clients in the supply of goods and providing the best solution on the needs of the products to be used and ensure the products we supply are the best in their field. Our experience team is committed to working responsibly to meet the needs of clients with reliable experience gained from our principles."
        />
      </Head>

      <main className={styles.Home}>
        <Navbar />
        {/* HERO / HEADER PAGE PERUSAHAAN */}

        <HomeHeader />

        <div className={styles.aboutServiceArea}>
          <CompanyContainer />
          <VisiMisi />
        </div>
        <HomeServices />

        <div className={styles.ourProjectArea}>
          <div className={styles.ourProjectArea_wrapper}>
            <h2>OUR PROJECT</h2>
            <HomeCard1 />
          </div>
          <img
            className={styles.img_bg}
            src="https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>

        {/* <HomeCard2 /> */}
        <BusinessPartner />

        {/* Business Partner */}

        <CustomerReferences />
      </main>
      <Footer />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap");
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
