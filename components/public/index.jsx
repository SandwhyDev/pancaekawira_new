import Head from "next/head";
import "./Home.module.css";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeCard1 from "../components/HomeCard1/HomeCard1";
import HomeServices from "../components/HomeServices/HomeServices";
import HomeCard2 from "../components/HomeCard2/HomeCard2";
import VisiMisi from "../components/VisiMisi/VisiMisi";
import BusinessPartner from "../components/BusinessPartner/BusinessPartner";

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
          crossorigin="anonymous"
        ></link>
      </Head>

      <main className="Home">
        <Navbar />
        {/* HERO / HEADER PAGE PERUSAHAAN */}

        <HomeHeader />

        <div className="aboutServiceArea">
          <HomeCard1 />
          <HomeServices />
          <HomeCard2 />
        </div>

        {/* VISI N MISI PERUSAHAAN */}
        <VisiMisi />

        {/* Business Partner */}
        <BusinessPartner />
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
