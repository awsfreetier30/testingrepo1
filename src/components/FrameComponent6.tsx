import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <header className={styles.screenShot01052024At143Parent}>
      <img
        className={styles.screenShot01052024At143}
        loading="lazy"
        alt=""
        src="/screen-shot-01052024-at-14-3@2x.png"
      />
      <div className={styles.navigation}>
        <div className={styles.home}>Home</div>
        <div className={styles.whoWeAre}>Who we are</div>
        <Form.Select className={styles.frameFormselect} />
        <div className={styles.careers}>Careers</div>
        <div className={styles.resources}>Resources</div>
        <div className={styles.cloudKart}>Cloud Kart</div>
      </div>
      <button className={styles.signuploginWrapper}>
        <div className={styles.signuplogin}>Signup/Login</div>
      </button>
    </header>
  );
};

export default FrameComponent6;
