import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.whatWeDoContentWrapper}>
      <div className={styles.whatWeDoContent}>
        <div className={styles.whatWeDoTitleParent}>
          <button className={styles.whatWeDoTitle}>
            <div className={styles.whatWeDo}>What we do</div>
          </button>
          <div className={styles.weDriveGrowthAndEfficiencyParent}>
            <h1
              className={styles.weDriveGrowth}
            >{`We drive Growth and Efficiency `}</h1>
            <h3
              className={styles.discoverGulfTechnologys}
            >{`Discover Gulf Technology's comprehensive range of technology solutions and services, including cloud solutions, AI & automation, IT services & solutions, and data centre & IT infrastructure, tailored for businesses in Saudi Arabia and the Middle East.`}</h3>
          </div>
        </div>
        <div className={styles.solutionsContentParent}>
          <div className={styles.solutionsContent}>
            <FrameComponent2
              cloudSolutions="Cloud Solutions"
              unlockTheFullPotentialOfC="Unlock the Full Potential of Cloud Computing , From cloud strategy consulting and migration to optimization, security, and managed services, we partner with leading cloud providers to deliver tailored solutions that drive growth, streamline processes"
            />
            <FrameComponent2
              cloudSolutions="AI Solutions"
              unlockTheFullPotentialOfC="Transform your business with Gulf Technology's AI and automation solutions. Our services include AI strategy consulting, intelligent process automation, predictive analytics, chatbots, and end-to-end implementation, integration, and management of AI solutions that revolutionize operations and unlock new possibilities"
              propGap="132px"
              propBackgroundImage="url('/frame-75@3x.png')"
              propDisplay="unset"
            />
          </div>
          <div className={styles.solutionsContent1}>
            <div className={styles.frameParent}>
              <div className={styles.businessSolutionsParent}>
                <h1 className={styles.businessSolutions}>Business Solutions</h1>
                <div className={styles.empowerYourBusiness}>
                  Empower Your Business with Robust IT Solutions in Saudi
                  Arabia, At Gulf Technology, we offer comprehensive IT services
                  and solutions designed to streamline your operations, enhance
                  security, and accelerate your growth.
                </div>
              </div>
              <button className={styles.learnMoreWrapper}>
                <div className={styles.learnMore}>Learn More</div>
              </button>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.itSolutionsParent}>
                  <h1 className={styles.itSolutions}>IT Solutions</h1>
                  <div className={styles.buildAFutureReady}>
                    Build a Future-Ready Foundation, Gulf Technology's data
                    center and IT infrastructure solutions provide a robust
                    foundation for your business in Saudi Arabia.
                  </div>
                </div>
              </div>
              <button className={styles.learnMoreContainer}>
                <div className={styles.learnMore1}>Learn More</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
