import styles from "./Display.module.css";

const Display = ({ text }: { text: string }) => {
  return <div className={styles.Sampler__display}>{text}</div>;
};

export default Display;
