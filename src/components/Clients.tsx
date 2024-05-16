import { FunctionComponent } from "react";
import styles from "./Clients.module.css";

const Clients: FunctionComponent = () => {
  return (
    <section className={styles.clients}>
      <button className={styles.clientTitle}>
        <div className={styles.ourClients}>Our Clients</div>
      </button>
      <div className={styles.clientLogos}>
        <div className={styles.clientRows}>
          <div className={styles.clientFirstRow}>
            <img
              className={styles.image8Icon}
              loading="lazy"
              alt=""
              src="/image-8@2x.png"
            />
          </div>
          <div className={styles.secondClientImages}>
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          </div>
          <img
            className={styles.image9Icon}
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
          <div className={styles.fifthClientImages}>
            <img
              className={styles.image10Icon}
              loading="lazy"
              alt=""
              src="/image-10@2x.png"
            />
          </div>
        </div>
        <div className={styles.clientRows1}>
          <div className={styles.image8Wrapper}>
            <img className={styles.image8Icon1} alt="" src="/image-8@2x.png" />
          </div>
          <div className={styles.image7Wrapper}>
            <img className={styles.image7Icon1} alt="" src="/image-7@2x.png" />
          </div>
          <img className={styles.image9Icon1} alt="" src="/image-9@2x.png" />
          <div className={styles.image10Wrapper}>
            <img
              className={styles.image10Icon1}
              alt=""
              src="/image-10@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
