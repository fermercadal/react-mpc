import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sampler from "../components/Sampler";
import { demoKit } from "../data/demoKit";

export default function Home() {
  return (
    <div className={styles.ReactMPC__container}>
      <Head>
        <title>React MPC</title>
        <meta name="description" content="Javascript drum machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.ReactMPC__title}>
        <span>React</span> MPC-2022 JS
      </h1>

      <Sampler samplesKit={demoKit} />

      <small>
        <a
          className={styles.ReactMPC__link}
          href="https://en.wikipedia.org/wiki/Akai_MPC"
          target="_blank"
          rel="noreferrer"
        >
          + info about AKAI MPC
        </a>
      </small>
    </div>
  );
}
