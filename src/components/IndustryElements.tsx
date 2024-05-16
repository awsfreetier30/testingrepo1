import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IndustryElements.module.css";

export type IndustryElementsType = {
  industryBackgrounds?: string;
  government?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const IndustryElements: FunctionComponent<IndustryElementsType> = ({
  industryBackgrounds,
  government,
  propPadding,
}) => {
  const industryContainersStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.industryElements}>
      <img
        className={styles.industryBackgroundsIcon}
        loading="lazy"
        alt=""
        src={industryBackgrounds}
      />
      <div
        className={styles.industryContainers}
        style={industryContainersStyle}
      >
        <h2 className={styles.government}>{government}</h2>
      </div>
    </div>
  );
};

export default IndustryElements;
