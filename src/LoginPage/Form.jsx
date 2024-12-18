import FormControl from "./FormControl";
import styles from './Form.module.css';
import FancyButton from '../FancyButton';

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Form() {
  const [userData, setUserData]=useState([])
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const getAPIData = async () => {
    try{
      const response = await axios.get('https://dummyjson.com/users');
      setUserData(response.data.users);
      // console.log("Fetched Users", response.data.users.json())
    }

    catch (error){
      console.log("Error1")
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);
useEffect(()=>{
  console.log("Updated", userData);
}, [userData]);
  
  const handleLogin = () => {
    console.log("Email", email);
    console.log("Password", password)
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log('Success');
      navigate("/userdata", {
        state: {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          address: user.address,
          image: user.image,
        },
      });
    } else {
      console.log("Invalid email or password");
    }
  };


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <FormControl label="Email" type="email" rootStyleOverride={{ margin: '1rem 0' }}  onChange={(e) => setEmail(e.target.value)}/>
            <FormControl label="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <FancyButton text="LOGIN" width="230px" margin="3rem auto .5rem auto" onClick ={()=>handleLogin()}/>
            <FancyButton text="FORGOT PASSWORD?" width="230px" margin=".5rem auto 3rem auto" />
        </div>
    );
}