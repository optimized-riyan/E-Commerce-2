import FormControl from "./FormControl";
import styles from "./Form.module.css";
import FancyButton from "../FancyButton";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";

export default function Form() {
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const getAPIData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUserData(response.data);
    } catch (error) {
      console.log("Error1");
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  const handleLogin = () => {
    if (!email) {
        setError('Email is required!');
        return;
    }
    if (!password) {
        setError('Password is required!');
        return;
    }
    const user = userData.find(
      (user) => user.email === email
    );
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
      setUser(user);
    } else {
      setError("User not found!");
    }
  };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <FormControl label="Email" type="email" rootStyleOverride={{ margin: '1rem 0' }}  onChange={(e) => setEmail(e.target.value)}/>
            <FormControl label="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <pre style={{ color: 'red', whiteSpace: 'pre-line' }}>{error}</pre>
            <FancyButton text="LOGIN" width="230px" margin="3rem auto .5rem auto" onClick ={()=>handleLogin()}/>
            <FancyButton text="NEW HERE?" width="230px" margin=".5rem auto 3rem auto" onClick={() => navigate('/signup')} />
        </div>
    );
}
