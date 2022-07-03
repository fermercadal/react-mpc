import Display from "./Display";
import Pad from "./Pad";
import styles from "./Sampler.module.css";
import { useState, useEffect } from "react";

type Sample = {
  padKey: string;
  padName: string;
  sound: string;
};

const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const handleKeyPress = (e: KeyboardEvent) => {
  const pressedKey = e.key.toUpperCase();

  if (validKeys.includes(pressedKey)) {
    const padFound = document.getElementById(pressedKey);
    padFound.click();
  }
};

const Sampler = ({ samplesKit }: { samplesKit: Sample[] }) => {
  const [pressed, setPressed] = useState("-");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const padsKit = samplesKit.map((sample: Sample) => {
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
