import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/VisiMisi.module.css";

const VisiMisi = () => {
  const [visi, setVisi] = useState(true);
  return (
    <div className="visiMisi">
      {visi ? (
        <>
          <div className={styles.imgContainer}>
            <span
              className={`${styles.arrowLeft2} material-icons`}
              onClick={() => {
                setVisi(!visi);
              }}
            >
              keyboard_arrow_left
            </span>
            <span
              className={`${styles.arrowRight2} material-icons`}
              onClick={() => {
                setVisi(!visi);
              }}
            >
              keyboard_arrow_right
            </span>
            <div className={styles.darkEffect}>
              <h1>OUR MISSION</h1>
              <p>
                Being the best distributor and contractor on providing the best
                solution for customers by working closely with our suppliers and
                our customers. We strive to provide an excellent marketing
                service that is supported by an experienced sales team.
              </p>
            </div>
            <Image
              src="/kardus.svg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.imgContainer}>
            <span
              className={`${styles.arrowLeft2} material-icons`}
              onClick={() => {
                setVisi(!visi);
              }}
            >
              keyboard_arrow_left
            </span>
            <span
              className={`${styles.arrowRight2} material-icons`}
              onClick={() => {
                setVisi(!visi);
              }}
            >
              keyboard_arrow_right
            </span>
            <div className={styles.darkEffect}>
              <h1>OUR VISION</h1>
              <p>
                To be a trusted distribution and construction company in
                Indonesia.{" "}
              </p>
            </div>
            <Image
              src="/kardus.svg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default VisiMisi;
