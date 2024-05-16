import { FunctionComponent } from "react";
import IndustryElements from "./IndustryElements";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.whoWeServeContentWrapper}>
      <div className={styles.whoWeServeContent}>
        <div className={styles.frameParent}>
          <button className={styles.whoWeServeWrapper}>
            <div className={styles.whoWeServe}>Who we serve</div>
          </button>
          <h1 className={styles.empoweringBusinessesIn}>
            Empowering Businesses in Every Industry
          </h1>
        </div>
        <div className={styles.industryIcons}>
          <IndustryElements
            industryBackgrounds="/rectangle-3@2x.png"
            government="Government"
          />
          <IndustryElements
            industryBackgrounds="/rectangle-3-1@2x.png"
            government="Telecommunications"
            propPadding="0px var(--padding-mid) 0px var(--padding-lg)"
          />
          <IndustryElements
            industryBackgrounds="/rectangle-3-2@2x.png"
            government="Defense"
            propPadding="0px var(--padding-mid) 0px var(--padding-lg)"
          />
          <IndustryElements
            industryBackgrounds="/rectangle-3-3@2x.png"
            government="Oil and Gas"
            propPadding="0px var(--padding-mid) 0px var(--padding-lg)"
          />
          <IndustryElements
            industryBackgrounds="/rectangle-3-4@2x.png"
            government="Healthcare"
            propPadding="0px var(--padding-mid) 0px var(--padding-lg)"
          />
          <IndustryElements
            industryBackgrounds="/rectangle-3-5@2x.png"
            government="Banking"
            propPadding="0px var(--padding-mid) 0px var(--padding-lg)"
          />
          <IndustryElements
            industryBackgrounds="/rectangle-3-6@2x.png"
            government="Hospitality"
            propPadding="0px var(--padding-mid) 0px var(--padding-lg)"
          />
          <IndustryElements
            industryBackgrounds="/rectangle-3-7@2x.png"
            government="Real Estate"
            propPadding="0px var(--padding-43xl) 0px var(--padding-42xl)"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
