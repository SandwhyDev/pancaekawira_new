import React from "react";
import styles from "../../styles/MuCard.module.css";

const MuCard = ({ data, datamap }) => {
  console.log(data);
  return (
    <div className={styles.mucard}>
      <div className={styles.decorationCardMu}></div>
      <div className={styles.cardmuLefts}>
        <img src={datamap.img} alt="Picture of the author" />
      </div>
      <div className={styles.cardmuRights}>
        <h1 dangerouslySetInnerHTML={{ __html: datamap.title }}></h1>
        <ul>
          {datamap.keunggulan.map((e, i) => {
            return <li key={i}>{e.body}</li>;
          })}
        </ul>
      </div>

      <a
        href={`/form-order/?id=${datamap._id}`}
        className={styles.buttonmu}
        style={{
          backgroundColor: "red",
        }}
      >
        More Info
      </a>
    </div>
  );
};

export default MuCard;
