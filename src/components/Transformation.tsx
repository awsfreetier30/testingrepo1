import { FunctionComponent } from "react";
import styles from "./Transformation.module.css";

const Transformation: FunctionComponent = () => {
  return (
    <section className={styles.transformation}>
      <div className={styles.transformContent}>
        <img
          className={styles.transformBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <div className={styles.transformMessage}>
          <div className={styles.businessTransformation}>
            <div className={styles.transformHeading}>
              <h1 className={styles.transformYourBusiness}>
                Transform your business today
              </h1>
              <div className={styles.discoverOurInnovativeSolutiWrapper}>
                <div className={styles.discoverOurInnovative}>
                  Discover our innovative solutions and take your business to
                  the next level.
                </div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <div className={styles.contactLearn}>
                <button className={styles.actionLabels}>
                  <div className={styles.contactUs}>Contact us</div>
                </button>
                <button className={styles.actionLabels1}>
                  <div className={styles.learnMore}>Learn More</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
