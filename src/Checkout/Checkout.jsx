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
          <div style={{ display: "flex", flexDirection: "row", margin:'20px', borderBottomStyle:'solid', padding:'15px', borderColor:'gray', borderWidth:'1px'}}>
            <label htmlFor="option1">
              <div className={styles.text}>UPI: </div>
              <div  className={styles.options}>
              <input type="radio" id="option1" value="option1" checked={selectedValue === "option1"} onChange={() => handleRadioChange("option1")}/>
              <FaGooglePay className={styles.icon} />
              <input type="radio" id="option4" value="option4" checked={selectedValue === "option4"} onChange={() => handleRadioChange("option4")}/>
              <SiPhonepe className={styles.icon} />
              <input type="radio" id="option2" value="option5" checked={selectedValue === "option5"} onChange={() => handleRadioChange("option5")}/>
              <SiPaytm className={styles.icon} />
              </div>
            </label>
          </div>


     
          <div style={{ display: "flex", flexDirection: "row", margin:'20px', borderBottomStyle:'solid', padding:'15px', borderColor:'gray', borderWidth:'1px'}}>
            
            <label htmlFor="option1">
              <div className={styles.text}>Paypal: </div>
              <div  className={styles.options}>
              <input type="radio" id="option2" value="option2" checked={selectedValue === "option2"} onChange={() => handleRadioChange("option2")}/>
                <FaPaypal className={styles.icon} />
              </div>
            </label>
          </div>
          <div style={{ display: "flex", flexDirection: "row", margin:'20px', borderBottomStyle:'solid', padding:'15px', borderColor:'gray', borderWidth:'1px'}}>
            <label htmlFor="option1">
              <div className={styles.text}>Credit Card: </div>
              <div className={styles.options}>
              <input type="radio" id="option3" value="option3" checked={selectedValue === "option3"} onChange={() => handleRadioChange("option3")}/>
                <CiCreditCard1 className={styles.icon} />
              </div>
            </label>
          </div>
      <div
        style={{ display: "flex", width: "100%", padding: "15px", alignItems: "center", justifyContent: "center",}}>
        <FancyButton text={"Checkout"} />
      </div>
      </div>
  );
};

export default CheckOut;
