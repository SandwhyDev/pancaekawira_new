import Image from "next/image";
import { useState } from "react";
import TabMenu from "../tabMenu/TabMenu";
// import Link from 'next/link'
import styles from "../../styles/navbar.module.css";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      {/* <form
        className="navSearchs"
        style={{ display: showSearch ? "flex" : "none" }}
      >
        <input type="text" className="navInputs" placeholder="search..." />
        <div className="icnContainer">
          <span className="material-icons">search</span>
        </div>
      </form> */}

      <TabMenu show={showModal} />

      <i
        className={styles.menuNav && "fas fa-bars"}
        onClick={() => {
          setShowModal(!showModal);
        }}
      ></i>
      <nav
        className={styles.navbar}
        style={{
          opacity: showModal ? 1 : 0.9,
        }}
      >
        <div className={styles.navLeft}>
          <div
            className={styles.imgGroups}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <Image
              src="/Assets/Brand.png"
              alt="Picture of the author"
              width="50px"
              height="50px"
            />
            <div className={styles.textbrand}>
              <h3 className={styles.textbrand1}>PANCA EKAWIRA SANJAYA</h3>
              {/* <h3 className="textbrand2">SANJAYA</h3> */}
            </div>
          </div>
          {/* <i
            className="fas fa-search searchIconPhone"
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          ></i> */}
        </div>

        <div className={styles.navRight}>
          <a href="/">
            <h3>COMPANY PROFILE</h3>{" "}
          </a>
          <a href="/product">
            <h3>OUR SERVICES</h3>
          </a>
          <a href="/project">
            <h3>PROJECT</h3>
          </a>
          <a href="/contact">
            {" "}
            <h3>CONTACT</h3>
          </a>

          {/* <a href="/e-comm">
            <h3>E-COMM PLAN</h3>
          </a> */}

          {/* <i
            className="fas fa-search searchIconNoteBook"
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          ></i> */}

          {/* <form className="navSearch">
            <input type="text" className="navInput" placeholder="search..." />
            <div className="icnContainer">
              <span className="material-icons">search</span>
            </div>
          </form> */}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
