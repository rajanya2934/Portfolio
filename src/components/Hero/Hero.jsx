import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rajanya Chakraborty</h1>
        <p className={styles.description}>
        I am an aspiring software developer pursuing my undergraduate degree at Techno Main Salt Lake. I am actively seeking opportunities to advance my career in software development.
        </p>
        <a href="https://www.linkedin.com/in/rajanya-chakraborty-466167281/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
