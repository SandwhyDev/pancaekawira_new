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
              className={"material-icons" && styles.arrowLeft2}
              onClick={() => {
                setVisi(!visi);
              }}
            >
              keyboard_arrow_left
            </span>
            <span
              className={"material-icons" && styles.arrowRight2}
              onClick={() => {
                setVisi(!visi);
              }}
            >
              keyboard_arrow_right
            </span>
            <div className={styles.darkEffect}>
              <h1>OUR MISSION</h1>
              <p>
                Being the best distributor on providing the best solution for
                customer by working closely with our suppliers and our
                customers. We strive to provide an excellent marketing service
                that is supported by an experienced sales team.
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
              className={"material-icons" && styles.arrowLeft2}
              onClick={() => {
                setVisi(!visi);
              }}
            >
              keyboard_arrow_left
            </span>
            <span
              className={"material-icons" && styles.arrowRight2}
              onClick={() => {
                setVisi(!visi);
              }}
            >
              keyboard_arrow_right
            </span>
            <div className={styles.darkEffect}>
              <h1>OUR VISION</h1>
              <p>
                To be trusted distribution company in Indonesia with building
                material as the focus product.{" "}
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
