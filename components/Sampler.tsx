import Display from "./Display";
import Pad from "./Pad";
import styles from "./Sampler.module.css";

const Sampler = () => {
  return (
    <section className={styles.ReactMPC__sampler}>
      <Display />

      <section className={styles.Sampler__pads}>
        <Pad />
      </section>
    </section>
  );
};

export default Sampler;
