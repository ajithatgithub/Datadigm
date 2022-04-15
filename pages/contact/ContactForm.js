import { useState } from "react";
import styles from "../../styles/Contact/ContactForm.module.css";

const initialValue = {
  name: "",
  email: "",
  company: "",
  description: "",
};

const ContactForm = () => {
  const handleSubmit = async (event) => {
    console.log("hey");
    event.preventDefault();
    const data = {
      [event.target.name]: event.target.value,
    };

    console.log(JSON.stringify(data));
  };

  return (
    <form action="/api/form" method="post" className={styles.form}>
      <div className={styles.formGroup}>
        <div className={styles.inputBox}>
          <input type="text" name="name" placeholder="Your name" />
          <div className={styles.inputLine}></div>
        </div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.inputBox}>
          <input type="email" name="email" placeholder="Your email" />
          <div className={styles.inputLine}></div>
        </div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.inputBox}>
          <input type="text" name="company" placeholder="Your company" />
          <div className={styles.inputLine}></div>
        </div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.inputBox}>
          <textarea
            name="description"
            placeholder="Tell us about your project"
          />
          <div className={styles.inputLine}></div>
        </div>
      </div>

      <div className={styles.btn}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
