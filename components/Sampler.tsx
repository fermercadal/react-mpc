import Display from "./Display";
import Pad from "./Pad";
import styles from "./Sampler.module.css";

const Sampler = ({ samplesKit }: any) => {
  const padsKit = samplesKit.map((sample) => {
    return <Pad sample={sample} key={sample.padKey} />;
  });

  return (
    <section className={styles.ReactMPC__sampler}>
      <Display />

      <section className={styles.Sampler__pads}>{padsKit}</section>
    </section>
  );
};

export default Sampler;
