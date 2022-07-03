import { useState } from "react";
import styles from "./Pad.module.css";

const Pad = ({ sample, setPressed }) => {
  const [playing, setplaying] = useState(false);

  let padSound: any;
  if (typeof Audio !== "undefined") {
    padSound = new Audio(`/sounds/${sample.sound}.mp3`);
  }

  const playSound = () => {
    setplaying(true);
    setPressed(sample.padName);
    if (padSound) {
      padSound.currentTime = 0;
      padSound.play();
    }
    setTimeout(() => {
      setplaying(false);
    }, 100);
  };

  return (
    <button
      className={`${styles.Sampler__pad} ${
        playing ? styles["Sampler__pad--active"] : ""
      }`}
      onClick={playSound}
    >
      <span>{sample.padKey}</span>
    </button>
  );
};

export default Pad;
