import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles/HomeCard1.module.css";
const HomeCard1 = () => {
  const [carousel, setCarousel] = useState({
    carousel1: true,
    carousel2: false,
    carousel3: false,
    carousel4: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setCarousel({
        carousel2: true,
      });
    }, 10000);

    setTimeout(() => {
      setCarousel({
        carousel3: true,
      });
    }, 20000);

    setTimeout(() => {
      setCarousel({
        carousel4: true,
      });
    }, 30000);

    setTimeout(() => {
      setCarousel({
        carousel1: true,
      });
    }, 40000);

    setTimeout(() => {
      setCarousel({
        carousel2: true,
      });
    }, 50000);

    setTimeout(() => {
      setCarousel({
        carousel3: true,
      });
    }, 60000);

    setTimeout(() => {
      setCarousel({
        carousel4: true,
      });
    }, 70000);

    setTimeout(() => {
      setCarousel({
        carousel1: true,
      });
    }, 80000);
  }, []);

  return (
    <div className={styles.aboutCard}>
      {carousel.carousel1 && (
        <>
          <div className={styles.cardLeft}>
            <span
              className={`${styles.arrowLeft} material-icons`}
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
            <div className={styles.decorationCard1}>
              {/*Component kosong Jangan Dihapus */}
            </div>
            <Image
              src="/Assets/project1.JPG"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardRight}>
            <span
              className={`${styles.arrowRight} material-icons`}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
            <h1>Cluster Caelus, Greenwich – BSD (128 units)</h1>
            <p>Pengerjaan : Kisi – Kisi Almunium</p>
            <p>Material : Almunium</p>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.buletCardUtama}></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            ></div>
          </div>
        </>
      )}
      {carousel.carousel2 && (
        <>
          <div className={styles.cardLeft}>
            <span
              className={`${styles.arrowLeft} material-icons`}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
            <div className={styles.decorationCard1}>
              {/*Component kosong Jangan Dihapus */}
            </div>
            <Image
              src="/Assets/project2.JPG"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardRight}>
            <span
              className={`${styles.arrowRight} material-icons`}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
            <h1>Cluster Water Terrace, Grand Wisata (24 units)</h1>
            <p>Pengerjaan : Kisi – Kisi Almunium</p>
            <p>Material : Almunium Handal</p>
          </div>
          <div className={styles.cardBottom}>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div className={styles.buletCardUtama}></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            ></div>
          </div>
        </>
      )}
      {carousel.carousel3 && (
        <>
          <div className={styles.cardLeft}>
            <span
              className={`${styles.arrowLeft} material-icons`}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
            <div className={styles.decorationCard1}>
              {/*Component kosong Jangan Dihapus */}
            </div>
            <Image
              src="/Assets/project3.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardRight}>
            <span
              className={`${styles.arrowRight} material-icons`}
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
            <h1>The Branz Simatupang</h1>
            <p>Pengerjaan : Decking outdoor & indoor </p>
            <p>Product : Milan Ecowood</p>
          </div>
          <div className={styles.cardBottom}>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <div className={styles.buletCardUtama}></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            ></div>
          </div>
        </>
      )}
      {carousel.carousel4 && (
        <>
          <div className={styles.cardLeft}>
            <span
              className={`${styles.arrowLeft} material-icons`}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
            <div className={styles.decorationCard1}>
              {/*Component kosong Jangan Dihapus */}
            </div>
            <Image
              src="/Assets/project4.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardRight}>
            <span
              className={`${styles.arrowRight} material-icons`}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
            <h1>Pabrik Difi Medika</h1>
            <p>Pengerjaan : Atap </p>
            <p>Product : Alderon</p>
          </div>
          <div className={styles.cardBottom}>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            {/* <div className={styles.buletCardUtama}></div> */}
            {/*  */}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeCard1;
