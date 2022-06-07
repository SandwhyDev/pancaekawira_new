import Image from "next/image";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.bluebg}>
          <div className={styles.footerKiri}>
            <h3 className={styles.PTpancaFooterText}>
              PT. PANCA EKAWIRA SANJAYA
            </h3>
            <h4 className={styles.textFooter}>
              Talavera Office Park lt 28 Jl TB Simatupang no. 23, cilandak
              barat, cilandak, jakarta selatan 12430
            </h4>

            <div className={styles.kontakPT}>
              <a href="tel:+622127654692">
                <div className={styles.contactMeContainer}>
                  <i className={styles.fas && styles.fa && styles.telLogo}></i>
                  <h3>TELEPON</h3>
                </div>
              </a>

              <a href="/contact">
                <div className={styles.contactMeContainer}>
                  <i className={styles.far && styles.fa}></i>
                  <h3>CONTACT US</h3>
                </div>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=6281514324298&text&app_absent=0">
                <div className={styles.contactMeContainer}>
                  <i className={styles.fab && styles.fa}></i>
                  <h3>WHATSAPP</h3>
                </div>
              </a>

              <a href="/contact">
                <div className={styles.contactMeContainer}>
                  <i className={styles.fas && styles.fa}></i>
                  <h3>LOCATION</h3>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.footerKanan}>
            <div className={styles.footerProduct}>
              <h3>PRODUCT</h3>
              <h4>Milan Ecowood</h4>
              <h4>Alderon</h4>
            </div>
            <div className={styles.footerProject}>
              <h3>PROJECT</h3>
              <h4>Cluster Caelus, Greenwich</h4>
              <h4>Cluster Water Terrace</h4>
              <h4>The Branz Simatupang</h4>
              <h4>Pabrik Difi Medika </h4>
            </div>
            <div className={styles.footerServices}>
              <h3>SERVICES</h3>
              <h4>Building</h4>
              <h4>Supplying</h4>
              <h4>Distributing</h4>
              <h4>Construction Services</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBawah}>
        <h3 className={styles.footerTitle}>
          © 2021 Panca Ekawira Sanjaya. All rights reserved.
        </h3>
      </div>

      <style jsx>
        {`
          .footer {
            background-image: url("./Assets/footerbg.jpg");
            background-position: center;
          }
        `}
      </style>
    </>
  );
}

export default Footer;
