import React, { useState } from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact='true' to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number you agreeing to our{" "}
        <span>Terms of Services and Privacy Policy</span>
        Thanks!
      </p>
      <Link
        exact='true'
        to="/code-confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next <img src="/images/nextArrowIcon.svg" className="ml-1" alt="" />
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
