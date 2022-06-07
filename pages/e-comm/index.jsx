import EcommplanCard1 from '../../components/EcommplanCard1/EcommplanCard1'
import EcommplanCard2 from '../../components/EcommplanCard2/EcommplanCard2'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import PlannHeader from '../../components/PlannHeader/PlannHeader'
import './style.css'

import Head from 'next/head'
import Layout from '../../components/Layout'

const Index = () =>{
    return(
        <>
        <Head>
        <title>PancaEkawiraSanjaya</title>
        <link rel="icon" href="/iconBrand.svg" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"></link>

      </Head>

         <Layout>
            <PlannHeader />

        <section className="ecommerce">
            <div className="pembatasMargin">
            </div>

            <EcommplanCard1 />
            <EcommplanCard2 />
            <EcommplanCard1 />
            <EcommplanCard2 />
            <EcommplanCard1 />
            <EcommplanCard2 />
            <EcommplanCard1 />
            <EcommplanCard2 />
            <EcommplanCard1 />
            <EcommplanCard2 />
            <div className="pembatasMargin">
            </div>
        </section>
        </Layout>

        </>

    )
}

export default Index