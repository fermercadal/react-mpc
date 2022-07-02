import styles from "./Pad.module.css";

const Pad = ({ sample }) => {
  let padSound;
  if (typeof Audio !== "undefined") {
    padSound = new Audio(`/sounds/${sample.sound}.mp3`);
  }

  const playSound = () => {
    if (padSound) {
      padSound.currentTime = 0;
      padSound.play();
    }
  };

  return (
    <button className={styles.Sampler__pad} onClick={playSound}>
      <span>{sample.padKey}</span>
    </button>
  );
};

export default Pad;
