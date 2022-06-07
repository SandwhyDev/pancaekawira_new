import React from "react";
import styles from "../../styles/FormOrderCard.css1";
const FormOrderCard = ({ data }) => {
  return (
    <>
      <div className={styles.formOrderCard}>
        <div classNa={styles.decorationCard1}>
          {/*Component kosong Jangan Dihapus */}
        </div>
        <div className={styles.formOrderCardHeader}>
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p className={styles.secondTitle}>
            <b>{data.secondTitle}</b>
          </p>
          <p>{data.tertiaryTitle}</p>
        </div>
        <div className={styles.formOrderCardContainerImage}>
          <img src={data.backgroundImage} alt="Picture of the author" />
        </div>
        <div className={styles.formOrderCardKeungulan}>
          <div className={styles.formOrderCardKeungulanLeft}>
            <img src={data.img} alt="Picture of the author" />
          </div>
          <div className={styles.formOrderCardKeungulanRight}>
            <h3>Keunggulan</h3>
            <ul>
              {data.keunggulan.map((e, i) => {
                return <li key={i}>{e.body}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.formOrderCardDataTeknis}>
          <h3>Data Teknis</h3>
          <div className={styles.col}>
            <div className={styles.row}>
              <p className={styles.jenis}>Bentuk</p>
              <p className={styles.nilai}>: {data.dataTeknis.bentuk}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.jenis}>Warna</p>
              <p className={styles.nilai}>: {data.dataTeknis.warna}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.jenis}>Perekat</p>
              <p className={styles.nilai}>: {data.dataTeknis.perekat}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.jenis}>Agregat</p>
              <p className={styles.nilai}>: {data.dataTeknis.agregat}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.jenis}>Bahan Tambahan (Addtive)</p>
              <p className={styles.nilai}>: {data.dataTeknis.bahanTambahan}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.jenis}>Kebutuhan Air</p>
              <p className={styles.nilai}>: {data.dataTeknis.kebutuhanAir}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.jenis}>Kemasan</p>
              <p className={styles.nilai}>: {data.dataTeknis.kemasan}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.jenis}>Daya Sebar</p>
              <p
                className={styles.nilai}
                dangerouslySetInnerHTML={{ __html: data.dataTeknis.dayaSebar }}
              ></p>
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.formOrderCardFooter}>
              <img src="/Assets/logoPerusahaan/logo-mu.png" alt="logoMu" />
              <img
                src="/Assets/logoPerusahaan/logo-weber.png"
                alt="logoWeber"
              />
            </div>
            <button
              className={styles.beli}
              onClick={() => {
                window.open(
                  `https://api.whatsapp.com/send?phone=6281514324298&text=Hallo%2C%20Saya%20mau%20memesan%20${data.title}`
                );
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormOrderCard;
