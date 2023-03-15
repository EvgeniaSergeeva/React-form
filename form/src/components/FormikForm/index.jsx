import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import styles from "./index.module.scss";

const Basic = () => (
  <div className={styles.container}>
    <h1>Formik form</h1>
    <Formik
      initialValues={{ fullName: "", email: "", phone: "", message: "" }}
      validate={(values) => {
        const errors = {};

        if (values.fullName.length < 4) {
          errors.fullName = "Full name is not provided";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.phone.startsWith("+380")) {
          errors.phone = 'Phone number should start with +380"';
        }
        if (values.message.length < 10) {
          errors.message = "The message is too short";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 4));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <div className={styles.wrapper}>
            <div className={styles.inputHeight}>
              <input
                className={styles.inputStyle}
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              {errors.fullName && (
                <p className={styles.error}>{errors.fullName}</p>
              )}
            </div>
            <div className={styles.inputHeight}>
              <input
                className={styles.inputStyle}
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
          </div>

          <div className={styles.messageWrapper}>
            <input
              className={styles.inputStyle}
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>
          <div className={styles.messageWrapper}>
            <input
              className={styles.message}
              type="text"
              name="message"
              placeholder="Enter the message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          <label className={styles.checkboxControl}>
            <input className={styles.checkBox} type="checkbox" />
            Send me information
          </label>
          <button className={styles.btn} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
