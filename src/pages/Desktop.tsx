import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Partners from "../components/Partners";
import Clients from "../components/Clients";
import ClientFeedback from "../components/ClientFeedback";
import SliderNavigation from "../components/SliderNavigation";
import Transformation from "../components/Transformation";
import Footer from "../components/Footer";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <FrameComponent6 />
      <FrameComponent5 />
      <section className={styles.whoWeAreContentWrapper}>
        <div className={styles.whoWeAreContent}>
          <FrameComponent4 />
          <FrameComponent3 />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <Partners />
      <Clients />
      <section className={styles.testimonials}>
        <div className={styles.testimonialsTitle}>
          <div className={styles.testimonialsContent}>
            <button className={styles.testimonialsHeading}>
              <div className={styles.testimonials1}>Testimonials</div>
            </button>
          </div>
          <ClientFeedback />
          <SliderNavigation />
        </div>
      </section>
      <Transformation />
      <Footer />
    </div>
  );
};

export default Desktop;
