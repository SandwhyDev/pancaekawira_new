import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles/HomeCard2.module.css";

const Homecardone = () => {
  const [carousel, setCarousel] = useState({
    carousel1: true,
    carousel2: false,
    carousel3: false,
    carousel4: false,
  });

  // useEffect(()=>{
  //     setTimeout(()=>{
  //         setCarousel({
  //             carousel2 : true
  //         })
  //     }, 10000)

  //     setTimeout(()=>{
  //         setCarousel({
  //             carousel3 : true
  //         })
  //     }, 20000)

  //     setTimeout(()=>{
  //         setCarousel({
  //             carousel4 : true
  //         })
  //     }, 30000)

  //     setTimeout(()=>{
  //         setCarousel({
  //             carousel1 : true
  //         })
  //     }, 40000)

  //     setTimeout(()=>{
  //         setCarousel({
  //             carousel2 : true
  //         })
  //     }, 50000)

  //     setTimeout(()=>{
  //         setCarousel({
  //             carousel3 : true
  //         })
  //     }, 60000)

  //     setTimeout(()=>{
  //         setCarousel({
  //             carousel4 : true
  //         })
  //     }, 70000)

  //     setTimeout(()=>{
  //         setCarousel({
  //             carousel1 : true
  //         })
  //     }, 80000)

  // },[])

  return (
    <div className={styles.aboutCard2}>
      {carousel.carousel1 && (
        <>
          <div className={styles.cardLeft2}>
            <span
              className={"material-icons" && styles.arrowLefts}
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
            <h1>Lorem Ipsum Dolor</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              corrupti corporis reiciendis, earum optio voluptatibus sint rem
              autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure
              soluta accusamus suscipit.
            </p>
          </div>
          <div className={styles.cardRight2}>
            <span
              className={"material-icons" && styles.arrowRight}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
            <div className={styles.decorationCard2}>
              {/*Component kosong Jangan Dihapus */}
            </div>
            <Image
              src="/Assets/rumah2.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardBottom2}>
            <div className={styles.blueDecoration2}></div>
            <div className={styles.buletCardUtama2}></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard2}
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
          <div className={styles.cardLeft2}>
            <span
              className={"material-icons" && styles.arrowLefts}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
            <h1>Lorem Ipsum Dolor2</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              corrupti corporis reiciendis, earum optio voluptatibus sint rem
              autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure
              soluta accusamus suscipit.
            </p>
          </div>
          <div className={styles.cardRight2}>
            <span
              className={"material-icons" && styles.arrowRight}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
            <div className={styles.decorationCard2}>
              {/*Component kosong Jangan Dihapus */}
            </div>
            <Image
              src="/Assets/rumah2.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardBottom2}>
            <div className={styles.blueDecoration2}></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div className={styles.buletCardUtama2}></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard2}
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
          <div className={styles.cardLeft2}>
            <span
              className={"material-icons" && styles.arrowLefts}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
            <h1>Lorem Ipsum Dolor3</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              corrupti corporis reiciendis, earum optio voluptatibus sint rem
              autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure
              soluta accusamus suscipit.
            </p>
          </div>
          <div className={styles.cardRight2}>
            <span
              className={"material-icons" && styles.arrowRight}
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
            <div className={styles.decorationCard2}>
              {/*Component kosong Jangan Dihapus */}
            </div>
            <Image
              src="/Assets/rumah2.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardBottom2}>
            <div className={styles.blueDecoration2}></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <div className={styles.buletCardUtama2}></div>
            <div
              className={styles.buletCard2}
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
          <div className={styles.cardLeft2}>
            <span
              className={"material-icons" && styles.arrowLefts}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
            <h1>Lorem Ipsum Dolor4</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              corrupti corporis reiciendis, earum optio voluptatibus sint rem
              autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure
              soluta accusamus suscipit.
            </p>
          </div>
          <div className={styles.cardRight2}>
            <span
              className={"material-icons" && styles.arrowRight}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
            <div className={styles.decorationCard2}>
              {/*Component kosong Jangan Dihapus */}
            </div>
            <Image
              src="/Assets/rumah2.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardBottom2}>
            <div className={styles.blueDecoration2}></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <div
              className={styles.buletCard2}
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            <div className={styles.buletCardUtama2}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Homecardone;
