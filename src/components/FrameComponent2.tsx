import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  cloudSolutions?: string;
  unlockTheFullPotentialOfC?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  cloudSolutions,
  unlockTheFullPotentialOfC,
  propGap,
  propBackgroundImage,
  propDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      backgroundImage: propBackgroundImage,
    };
  }, [propGap, propBackgroundImage]);

  const cloudSolutionsStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.cloudBusinessSolutionsParent} style={frameDivStyle}>
      <div className={styles.cloudBusinessSolutions}>
        <h1 className={styles.cloudSolutions} style={cloudSolutionsStyle}>
          {cloudSolutions}
        </h1>
        <div className={styles.unlockTheFull}>{unlockTheFullPotentialOfC}</div>
      </div>
      <button className={styles.learnMoreButtons}>
        <div className={styles.learnMore}>Learn More</div>
      </button>
    </div>
  );
};

export default FrameComponent2;
