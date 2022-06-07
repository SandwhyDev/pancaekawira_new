import styles from "../../styles/TabMenu.module.css";

const TabMenu = ({ show }) => {
  return (
    <div
      className={styles.modalNav}
      style={{
        transform: show ? "translatey(0)" : "translateY(50vh)",
      }}
    >
      <h3
        onClick={() => {
          window.location.href = "/";
        }}
      >
        COMPANY PROFILE
      </h3>
      <h3
        onClick={() => {
          window.location.href = "/product";
        }}
      >
        OUR SERVICES
      </h3>
      <h3
        onClick={() => {
          window.location.href = "/project";
        }}
      >
        PROJECT REFERENCE
      </h3>
      <h3
        onClick={() => {
          window.location.href = "/contact";
        }}
      >
        CONTACT
      </h3>
    </div>
  );
};

export default TabMenu;
