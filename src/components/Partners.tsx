import { FunctionComponent } from "react";
import styles from "./Partners.module.css";

const Partners: FunctionComponent = () => {
  return (
    <section className={styles.partners}>
      <button className={styles.partnersTitle}>
        <div className={styles.ourMajorPartners}>Our Major Partners</div>
      </button>
      <div className={styles.partnerLogos}>
        <div className={styles.partnerRows}>
          <div className={styles.partnerFirstRow}>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            <div className={styles.secondPartnerImages}>
              <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
            </div>
            <div className={styles.thirdPartnerImages}>
              <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            </div>
            <div className={styles.fifthPartnerImage}>
              <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
            </div>
          </div>
          <div className={styles.partnerSecondRow}>
            <img className={styles.image2Icon1} alt="" src="/image-2@2x.png" />
            <div className={styles.seventhPartnerImages}>
              <img
                className={styles.image3Icon1}
                alt=""
                src="/image-3@2x.png"
              />
            </div>
            <div className={styles.ninethPartnerImages}>
              <img
                className={styles.image4Icon1}
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className={styles.eleventhPartnerImage}>
              <img
                className={styles.image5Icon1}
                alt=""
                src="/image-5@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.partnerRows1}>
          <div className={styles.frameParent}>
            <div className={styles.image3Wrapper}>
              <img
                className={styles.image3Icon2}
                alt=""
                src="/image-3-2@2x.png"
              />
            </div>
            <div className={styles.image4Wrapper}>
              <img
                className={styles.image4Icon2}
                alt=""
                src="/image-4-2@2x.png"
              />
            </div>
            <div className={styles.image5Wrapper}>
              <img
                className={styles.image5Icon2}
                alt=""
                src="/image-5-2@2x.png"
              />
            </div>
            <img
              className={styles.image2Icon2}
              alt=""
              src="/image-2-2@2x.png"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.image3Container}>
              <img
                className={styles.image3Icon3}
                alt=""
                src="/image-3-2@2x.png"
              />
            </div>
            <div className={styles.image4Container}>
              <img
                className={styles.image4Icon3}
                alt=""
                src="/image-4-2@2x.png"
              />
            </div>
            <div className={styles.image5Container}>
              <img
                className={styles.image5Icon3}
                alt=""
                src="/image-5-2@2x.png"
              />
            </div>
            <img
              className={styles.image2Icon3}
              alt=""
              src="/image-2-2@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
