import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.frameParent}>
          <div className={styles.screenShot01052024At144Parent}>
            <img
              className={styles.screenShot01052024At144}
              loading="lazy"
              alt=""
              src="/screen-shot-01052024-at-14-4@2x.png"
            />
            <div className={styles.footerLinks}>
              <div className={styles.linkCategories}>
                <div className={styles.linkColumns}>
                  <div className={styles.quickLinks}>Quick links</div>
                  <div className={styles.linkLists}>
                    <div className={styles.whoWeAre}>Who we are</div>
                    <div className={styles.whatWeDo}>What we do</div>
                    <div className={styles.caseStudies}>Case studies</div>
                    <div className={styles.resources}>Resources</div>
                  </div>
                </div>
                <div className={styles.linkColumns1}>
                  <div className={styles.contactUs}>Contact us</div>
                  <div className={styles.careersParent}>
                    <div className={styles.careers}>Careers</div>
                    <div className={styles.blogs}>Blogs</div>
                    <div className={styles.infographics}>Infographics</div>
                    <div className={styles.webinars}>Webinars</div>
                  </div>
                </div>
                <div className={styles.linkColumns2}>
                  <div className={styles.cloudSolutions}>Cloud solutions</div>
                  <div className={styles.aiAutomationParent}>
                    <div
                      className={styles.aiAutomation}
                    >{`AI & Automation`}</div>
                    <div className={styles.itServices}>IT Services</div>
                    <div className={styles.itSolutions}>IT Solutions</div>
                    <div className={styles.businessSolutions}>
                      Business Solutions
                    </div>
                    <div className={styles.cloudServicePurchase}>
                      Cloud service purchase
                    </div>
                  </div>
                </div>
                <div className={styles.linkColumns3}>
                  <div className={styles.login}>Login</div>
                  <div className={styles.profileManagementParent}>
                    <div className={styles.profileManagement}>
                      Profile management
                    </div>
                    <div className={styles.loyaltyProgram}>Loyalty Program</div>
                    <div className={styles.orderHistory}>Order History</div>
                    <div className={styles.jobListings}>Job listings</div>
                    <div
                      className={styles.benefitsPerks}
                    >{`Benefits & Perks`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerDivider} />
        </div>
        <div className={styles.copyrightSocial}>
          <div className={styles.copyrightContent}>
            <div className={styles.copyrightDetails}>
              <div className={styles.gulfTechnologyAll}>
                © 2024 Gulf Technology. All rights reserved.
              </div>
              <div className={styles.footerLinks1}>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
                <div className={styles.termsOfService}>Terms of service</div>
                <div className={styles.cookieSettings}>Cookie settings</div>
              </div>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.image11Wrapper}>
              <img
                className={styles.image11Icon}
                alt=""
                src="/image-11@2x.png"
              />
            </div>
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
            <div className={styles.image13Wrapper}>
              <img
                className={styles.image13Icon}
                alt=""
                src="/image-13@2x.png"
              />
            </div>
            <div className={styles.image14Wrapper}>
              <img
                className={styles.image14Icon}
                alt=""
                src="/image-14@2x.png"
              />
            </div>
            <div className={styles.image15Wrapper}>
              <img
                className={styles.image15Icon}
                alt=""
                src="/image-15@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
