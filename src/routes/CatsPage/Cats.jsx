import React from "react";
import cat1 from "../../assets/image/meowersblp.jpg";
import cat2 from "../../assets/image/meowerswut.jpg";
import cat3 from "../../assets/image/meowersh1.jpg";

import styles from "./layout.module.css";

export default function Horse() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={cat1} alt="" />
      <img className={styles.img} src={cat2} alt="" />
      <img className={styles.img} src={cat3} alt="" />
    </div>
  );
}
