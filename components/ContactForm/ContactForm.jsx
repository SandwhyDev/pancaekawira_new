import styles from "../../styles/ContactForm.module.css";
const ContactForm = () => {
  //buat sebuah hanldeLogin dan fetch ke api login
  const handleForm = (e) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyA7vtH8tndRL06K92lwv5fH730W9IiWHqZd_PWJCfQOAaSlpij7OlT/exec";
    const form = document.forms["google-sheet"];
    let btnsubmit = document.querySelector(".form-contact");

    e.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then(
        (response) =>
          (btnsubmit.innerHTML = `
      <h1 style="display:flex; align-items:center; justify-content: center;">Thanks for Contacting us..! We Will Contact You Soon...</h1>
      `)
      )
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <section className={styles.form - container}>
      <div className={styles.gmaps}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.786363153062!2d106.79512931476947!3d-6.29178499544624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e64bbface5%3A0x355071b9662b071a!2sThe%20CEO%20Building%20level%2012!5e0!3m2!1sid!2sid!4v1610509055209!5m2!1sid!2sid"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactForm;
