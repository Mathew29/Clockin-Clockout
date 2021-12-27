import Head from "next/head";
import Image from "next/image";

import Dates from "../components/Dates/Dates";
import Times from "../components/Times/Times";
import ClockInBar from "../components/ClockInBar/ClockInBar";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Dates />
      <Times />
      <ClockInBar />
    </div>
  );
}
