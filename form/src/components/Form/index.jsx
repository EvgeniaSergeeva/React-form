import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./index.module.scss";

const Form = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [validation, setValidation] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const isEnabled =
    validation.fullName === "" &&
    validation.email === "" &&
    validation.phone === "" &&
    validation.message === "" &&
    user.fullName !== "" &&
    user.email !== "" &&
    user.phone !== "" &&
    user.message !== "";
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const checkValidation = () => {
    let errors = validation;
    if (user.fullName.length < 4) {
      errors.fullName = "Full name is not provided";
      console.log(validation);
    } else {
      errors.fullName = "";
    }
    if (!user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errors.email = `Please provide email in proper format`;
    } else {
      errors.email = "";
    }
    if (user.message.length < 10) {
      errors.message = "The message is too short";
    } else {
      errors.message = "";
    }
    if (!user.phone.startsWith("+380")) {
      errors.phone = "Phone number should start with +380";
    } else {
      errors.phone = "";
    }
    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [user]);
  const handleSubmit = () => {
    alert("Your form is submitted");
  };
  return (
    <div className={styles.container}>
      <form className={styles.formStyle} onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <div className={styles.inputHeight}>
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={user.fullName}
              onChange={handleChange}
            />
            {validation.fullName && (
              <p className={styles.error}>{validation.fullName}</p>
            )}
          </div>
          <div className={styles.inputHeight}>
            <Input
              name="email"
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
            />
            {validation.email && (
              <p className={styles.error}>{validation.email}</p>
            )}
          </div>
        </div>

        <div className={styles.messageWrapper}>
          <Input
            name="phone"
            type="tel"
            placeholder="Enter your phone"
            value={user.phone}
            onChange={handleChange}
          />
          {validation.phone && (
            <p className={styles.error}>{validation.phone}</p>
          )}
        </div>

        <div className={styles.messageWrapper}>
          <Input
            className={styles.message}
            width="80%"
            name="message"
            type="text"
            placeholder="Enter the message"
            value={user.message}
            onChange={handleChange}
          />
          {validation.message && (
            <p className={styles.error}>{validation.message}</p>
          )}
        </div>

        <label className={styles.checkboxControl}>
          <input
            className={styles.checkBox}
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          Send me information
        </label>
        <Button disabled={!isEnabled} textBtn="Submit" />
      </form>
    </div>
  );
};
export default Form;
