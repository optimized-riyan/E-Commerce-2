import React, { useEffect, useRef } from "react";
import styles from './FancyButton.module.css'
const FancyButton = ({text, width = '230px', margin = '0'}) => {
  

    return (
      <button className={styles.button} style={{ width, margin }}>{text}</button>
    );
  };
  
  export default FancyButton;