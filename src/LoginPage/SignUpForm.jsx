import { useState } from 'react';
import styles from './Form.module.css';
import FormControl from './FormControl';
import FancyButton from '../FancyButton';

export default function SignUpForm({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign Up</h1>
            <FormControl label="Email" type="email" value={email} rootStyleOverride={{ margin: '1rem 0' }} onChange={(e) => setEmail(e.target.value)}/>
            <FormControl label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <FormControl label="Confirm Password" type="password" value={confirmPassword} rootStyleOverride={{ margin: '1rem 0' }} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <FancyButton text="SIGN UP" width="230px" margin="3rem auto .5rem auto"/>
            <FancyButton text="LOGIN?" width="230px" margin=".5rem auto 3rem auto" />
        </div>
    );
}