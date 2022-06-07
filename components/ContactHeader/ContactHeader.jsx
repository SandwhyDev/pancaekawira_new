import styles from "../../styles/ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={styles.headerImgContainerContact}>
      <div className={styles.heroTextContact}>
        {/* <h1>Contact</h1> */}
        <div className={styles.contact_detail}>
          <h3 className={styles.PTpancaFooterText}>
            PT. PANCA EKAWIRA SANJAYA
          </h3>
          <h4 className={styles.textFooter}>
            Talavera Office Park lt 28 Jl TB Simatupang no. 23, cilandak barat,
            cilandak, jakarta selatan 12430
          </h4>

          <div className={styles.kontakPT}>
            <a href="tel:+622127654692">
              <div className={styles.contactMeContainer}>
                <i
                  className={styles.fas && "fa-phone-alt" && styles.telLogo}
                ></i>
                <h3>TELEPON</h3>
              </div>
            </a>

            <a href="/contact">
              <div className={styles.contactMeContainer}>
                <i className={styles.far && "fa-envelope"}></i>
                <h3>EMAIL</h3>
              </div>
            </a>

            <a href="https://api.whatsapp.com/send/?phone=6281514324298&text&app_absent=0">
              <div className={"fa-envelope"}>
                <i className={styles.fab && "fa-whatsapp"}></i>
                <h3>WHATSAPP</h3>
              </div>
            </a>

            <a href="/contact">
              <div className={styles.contactMeContainer}>
                <i className={styles.fas && "fa-map-marker-alt"}></i>
                <h3>LOCATION</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Picture of the author"
        className={styles.imgHeader}
      />
    </div>
  );
};

export default ContactHeader;
