import { Button } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Let's Keep in Touch`}</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="https://picsum.photos/400/250"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={10}
            rows={5}
          ></textarea>
          <button type={"submit"} className={styles.btn_submit}>
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
