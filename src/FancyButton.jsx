import React, { useEffect, useRef } from "react";
import styles from './FancyButton.module.css'
const FancyButton = ({text}) => {
  

    return (
     
      <div>
      <button className={styles.button}>{text}</button>
      </div>
    );
  };
  
  export default FancyButton;