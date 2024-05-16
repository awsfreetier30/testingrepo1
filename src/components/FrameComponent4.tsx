import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <button className={styles.whoWeAreWrapper}>
        <div className={styles.whoWeAre}>Who we are</div>
      </button>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.welcomeToGulfTechnologyParent}>
            <h1
              className={styles.welcomeToGulf}
            >{`Welcome to Gulf Technology `}</h1>
            <h3 className={styles.yourTrustedDigital}>
              Your Trusted Digital Transformation Partner in Saudi Arabia
            </h3>
          </div>
          <div className={styles.foundedIn2010GulfTechnoloWrapper}>
            <div className={styles.foundedIn2010}>
              Founded in 2010, Gulf Technology is a leading IT solutions
              provider headquartered in the United Arab Emirates. We empower
              businesses with a comprehensive suite of services, including IT
              consultancy, managed services, cloud solutions, and business
              communication tools. Our team of experts is dedicated to helping
              organizations streamline their IT operations, improve efficiency,
              and achieve their strategic goals.
            </div>
          </div>
          <button className={styles.frameButton}>
            <div className={styles.letsConnectWrapper}>
              <div className={styles.letsConnect}>Let’s Connect</div>
            </div>
            <img
              className={styles.arrowOutwardIcon}
              alt=""
              src="/arrow-outward.svg"
            />
          </button>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-2@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
