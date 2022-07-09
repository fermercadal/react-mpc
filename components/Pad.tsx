import styles from "./Pad.module.css";

const Pad = ({ sample, playSound, setPressed }) => {
  return (
    <button
      id={`button-${sample.padKey}`}
      className={styles.Sampler__pad}
      onClick={() => {
        setPressed(sample.padName);
        playSound();
      }}
    >
      <span>{sample.padKey}</span>
      <audio id={`audio-${sample.padKey}`} src={`/sounds/${sample.sound}.mp3`}>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </button>
  );
};

export default Pad;
