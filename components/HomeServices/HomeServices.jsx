import styles from "../../styles/HomeServices.module.css";

const HomeServices = () => {
  return (
    <div className={styles.ourServices}>
      <h2>OUR SERVICE</h2>
      {/* <div className="decorationServices"></div> */}
      <div className={styles.serviceContentWrapper}>
        <div className={styles.serviceContent}>
          {/* <i className="fas fa-box"></i> */}
          <div className={styles.serviceText}>
            <h3>Distribution</h3>
            <p></p>
          </div>
          <img
            src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
        <div className={styles.serviceContent}>
          {/* <i className="fas fa-tools"></i> */}
          <div className={styles.serviceText}>
            <h3>Construction</h3>
            <p></p>
          </div>
          <img
            src="https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
        <div className={styles.serviceContent}>
          {/* <i className="fas fa-building"></i> */}
          <div className={styles.serviceText}>
            <h3>Application</h3>
          </div>
          <img
            src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
