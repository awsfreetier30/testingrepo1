import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.projectsContentParent}>
        <div className={styles.projectsContent}>
          <div className={styles.projectsStats}>
            <div className={styles.projectsStatsNumbers}>
              <div className={styles.projectsStatsCircle}>
                <div className={styles.projectsCircle} />
              </div>
              <input
                className={styles.projects}
                placeholder="Projects"
                type="text"
              />
            </div>
            <div className={styles.projectsStatsChild} />
          </div>
        </div>
        <div className={styles.projectsSeparator}>362+</div>
        <div className={styles.deliveringResultsOnContainer}>
          <p className={styles.deliveringResultsOn}>
            Delivering Results on a Global Scale
          </p>
          <p className={styles.penSpark}>pen_spark</p>
        </div>
      </div>
      <div className={styles.clientsContent}>
        <div className={styles.clientStats}>
          <div className={styles.clientStatsNumbers}>
            <div className={styles.clientStatsCircles}>
              <div className={styles.circlesWrapper}>
                <div className={styles.circles} />
              </div>
              <input
                className={styles.clients}
                placeholder="Clients"
                type="text"
              />
            </div>
            <div className={styles.clientStatsNumbersChild} />
          </div>
        </div>
        <div className={styles.statsSeparator}>36+</div>
        <div className={styles.trustedByLeading}>
          Trusted by Leading Businesses
        </div>
      </div>
      <div className={styles.clientsContent1}>
        <div className={styles.clientsContentInner}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.activeInstalls}>Active Installs</div>
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.div}>128+</div>
        <div className={styles.engagedVisitors}>Engaged Visitors</div>
      </div>
    </div>
  );
};

export default FrameComponent3;
