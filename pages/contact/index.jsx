import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Layout>
        <ContactHeader />
        {/* <main className="contact">
          <ContactForm />
        </main> */}
      </Layout>
    </>
  );
};

export default Contact;
