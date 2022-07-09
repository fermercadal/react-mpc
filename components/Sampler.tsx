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

const playSound = (key: string) => {
  const pressed = key;
  const audio = document.getElementById(`audio-${pressed}`) as HTMLAudioElement;
  const button = document.getElementById(`button-${pressed}`);

  audio.currentTime = 0;
  audio.play();

  button.classList.add(styles["Sampler__pad--active"]);
  setTimeout(() => {
    button.classList.remove(styles["Sampler__pad--active"]);
  }, 100);
};

const Sampler = ({ samplesKit }: { samplesKit: Sample[] }) => {
  const [pressed, setPressed] = useState("-");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const pressedKey = e.key.toUpperCase();

      if (validKeys.includes(pressedKey)) {
        const pressedPadName = samplesKit.find(
          (sample) => sample.padKey === pressedKey
        ).padName;

        playSound(pressedKey);
        setPressed(pressedPadName);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [samplesKit]);

  const padsKit = samplesKit.map((sample: Sample) => {
    return (
      <Pad
        sample={sample}
        setPressed={setPressed}
        key={sample.padKey}
        playSound={() => {
          playSound(sample.padKey);
        }}
      />
    );
  });

  return (
    <section className={styles.ReactMPC__sampler}>
      <Display text={pressed} />
      <section className={styles.Sampler__pads}>{padsKit}</section>
    </section>
  );
};

export default Sampler;
