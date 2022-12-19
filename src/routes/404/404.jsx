import React from "react";
import deadLink from "../../assets/image/dead-link.png";
import { Link } from "react-router-dom";
import styles from "./layout.module.css";

export default function Horse() {
  return (
    <div className={styles.container}>
      <img className={styles.deadLink} src={deadLink} alt="" />
      <h1 className={styles.message404}>oops something went wrong</h1>
      <Link className={styles.message404} to="/">
        Go Back
      </Link>
    </div>
  );
}
