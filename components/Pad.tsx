import styles from "./Pad.module.css";

const Pad = () => {
  return (
    <button className={styles.Sampler__pad}>
      <span>A</span>
      <audio id={"asd"} src={"asd"}></audio>
    </button>
  );
};

export default Pad;
