import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.newestSliderParent}>
      <div className={styles.newestSlider}>
        <div className={styles.sliderContent}>
          <div className={styles.empoweringBusinessesCard}>
            <img
              className={styles.empoweringBusinessesCardChild}
              loading="lazy"
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className={styles.empoweringBusinessesWithTecWrapper}>
              <div className={styles.empoweringBusinessesWith}>
                Empowering Businesses with Technology Solutions
              </div>
            </div>
            <div className={styles.fromCloudSolutionsToManageWrapper}>
              <div className={styles.fromCloudSolutions}>
                From cloud solutions to managed services, we offer everything
                you need to thrive in the digital age.
              </div>
            </div>
            <div className={styles.contactUsCard}>
              <div className={styles.contactUsButton}>
                <div className={styles.contactUs}>Contact us</div>
              </div>
            </div>
          </div>
          <div className={styles.sliderCards}>
            <img
              className={styles.sliderCardsChild}
              alt=""
              src="/rectangle-1-1@2x.png"
            />
            <div className={styles.simplifyItManagement}>
              Simplify IT Management, Focus on Your Business
            </div>
            <div className={styles.sliderDescriptions}>
              <div className={styles.letsConnectCardParent}>
                <div className={styles.letsConnectCard}>
                  <div className={styles.letsConnectButton}>
                    <div className={styles.letsConnect}>Lets Connect</div>
                  </div>
                </div>
                <div className={styles.letGulfTechnology}>
                  Let Gulf Technology handle your IT infrastructure so you can
                  focus on what matters most. Our managed services ensure your
                  IT runs smoothly and securely.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sliderCards1}>
            <img
              className={styles.sliderCardsItem}
              alt=""
              src="/rectangle-1-2@2x.png"
            />
            <div className={styles.customAiSolutions}>
              Custom AI Solutions tailored to your business needs
            </div>
            <div className={styles.weDontOfferAOneSizeFitsWrapper}>
              <div className={styles.weDontOffer}>
                We don't offer a one-size-fits-all approach. Our team of experts
                will work with you to develop custom AI solutions that address
                your unique challenges and goals.
              </div>
            </div>
            <div className={styles.learnMoreCards}>
              <div className={styles.learnMoreButtons}>
                <div className={styles.learnMore}>Learn More</div>
              </div>
            </div>
          </div>
          <div className={styles.sliderCards2}>
            <img
              className={styles.sliderCardsInner}
              alt=""
              src="/rectangle-1-3@2x.png"
            />
            <div className={styles.guidingYourIt}>
              Guiding Your IT Journey with Comprehensive Project Management
            </div>
            <div className={styles.ourTeamOfExperiencedProjecWrapper}>
              <div className={styles.ourTeamOfContainer}>
                <p className={styles.ourTeamOf}>
                  Our team of experienced project managers provides the
                  expertise and guidance you need to navigate the complexities
                  of your IT initiatives.
                </p>
                <p className={styles.penSpark}>pen_spark</p>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.learnMoreWrapper}>
                <div className={styles.learnMore1}>Learn More</div>
              </div>
            </div>
          </div>
          <div className={styles.sliderCards3}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-1-4@2x.png"
            />
            <div className={styles.unlockThePower}>
              Unlock the Power of the Cloud with Gulf Technology
            </div>
            <div className={styles.sliderCardsInner1}>
              <div className={styles.letGulfTechnologyHandleYouParent}>
                <div className={styles.letGulfTechnology1}>
                  Let Gulf Technology handle your IT infrastructure so you can
                  focus on what matters most. Our managed services ensure your
                  IT runs smoothly and securely.
                </div>
                <button className={styles.tryNowWrapper}>
                  <div className={styles.tryNow}>Try Now!</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.frameChild1} />
      </div>
    </section>
  );
};

export default FrameComponent5;
