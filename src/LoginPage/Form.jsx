import FormControl from "./FormControl";
import styles from './Form.module.css';
import FancyButton from '../FancyButton';
import { useState, useEffect } from "react";
import axios from "axios";
// const axios = require('axios');
export default function Form() {
    const getAPIData = async () => {

    axios.get('https://dummyjson.com/users')
    .then(function (response) {
      console.log(response.data.users);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
  };

  useEffect(() => {
    getAPIData();
  }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <FormControl label="Email" type="email" rootStyleOverride={{ margin: '1rem 0' }} />
            <FormControl label="Password" />
            <FancyButton text="LOGIN" width="230px" margin="3rem auto .5rem auto" />
            <FancyButton text="FORGOT PASSWORD?" width="230px" margin=".5rem auto 3rem auto" />
        </div>
    );
}