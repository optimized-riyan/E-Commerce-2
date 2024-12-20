import React, { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import FancyButton from "../FancyButton";
import { CiCreditCard1 } from "react-icons/ci";
import styles from './CheckOut.module.css';
const CheckOut = () => {
 const [selectedValue, setSelectedValue] = useState("option1");

    const handleRadioChange = (value) => {
      setSelectedValue(value);
    };

  return (

         <div className={styles.div1}>
          Select Payment Method:
          <div style={{ display: "flex",flexDirection: "row"}}>
            <input type="radio" id="option1" value="option1" checked={selectedValue === "option1"} onChange={() => handleRadioChange("option1")}
            />
            <label htmlFor="option1">
              <div className={styles.options}>
                <div className={styles.text}>UPI: </div>
                <div>
                <FaGooglePay className={styles.icon} />
                <SiPhonepe className={styles.icon} />
                <SiPaytm className={styles.icon} />
                </div>
              </div>
            </label>
          </div>
     

        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input type="radio" id="option2" value="option2" checked={selectedValue === "option2"} onChange={() => handleRadioChange("option2")}/>
            <label htmlFor="option1">
              <div  className={styles.options}>
              <div className={styles.text}>Paypal: </div>
                <FaPaypal className={styles.icon} />
              </div>
            </label>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", flexDirection: "row",}}>
            <input type="radio" id="option3" value="option3" checked={selectedValue === "option3"} onChange={() => handleRadioChange("option3")}/>
            <label htmlFor="option1">
              <div className={styles.options}>
              <div className={styles.text}>Credit Card: </div>
                <CiCreditCard1 className={styles.icon} />
              </div>
            </label>
          </div>
        </div>
  
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FancyButton text={"Checkout"} />
      </div>
      </div>
  );
};

export default CheckOut;
