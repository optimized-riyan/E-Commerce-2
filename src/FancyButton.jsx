import React, { useEffect, useRef } from "react";
import styles from './FancyButton.module.css'
const FancyButton = ({text, width = '230px'}) => {
  

    return (
     
      <div>
      <button className={styles.button} style={{ width }}>{text}</button>
      </div>
    );
  };
  
  export default FancyButton;