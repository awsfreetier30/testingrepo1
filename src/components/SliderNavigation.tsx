import { FunctionComponent } from "react";
import styles from "./SliderNavigation.module.css";

const SliderNavigation: FunctionComponent = () => {
  return (
    <div className={styles.sliderNavigation}>
      <div className={styles.navigationControls}>
        <div className={styles.sliderButtons}>
          <div className={styles.navigationDots}>
            <div className={styles.dotIndicators} />
            <div className={styles.dotIndicators1} />
            <div className={styles.dotIndicators2} />
            <div className={styles.dotIndicators3} />
            <div className={styles.dotIndicators4} />
          </div>
        </div>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/frame-119@2x.png" />
          <img className={styles.frameItem} alt="" src="/frame-118@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default SliderNavigation;
