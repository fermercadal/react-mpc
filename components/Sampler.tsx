import Display from "./Display";
import Pad from "./Pad";
import styles from "./Sampler.module.css";
import { useState, useEffect } from "react";

const handleKeyPress = (e) => {
  console.log("yes", e.key);
};

const Sampler = ({ samplesKit }: any) => {
  const [pressed, setPressed] = useState("-");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const padsKit = samplesKit.map((sample) => {
    return <Pad sample={sample} setPressed={setPressed} key={sample.padKey} />;
  });

  return (
    <section className={styles.ReactMPC__sampler}>
      <Display text={pressed} />
      <section className={styles.Sampler__pads}>{padsKit}</section>
    </section>
  );
};

export default Sampler;
