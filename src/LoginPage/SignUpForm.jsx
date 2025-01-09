import { useContext, useState } from 'react';
import styles from './Form.module.css';
import FormControl from './FormControl';
import FancyButton from '../FancyButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../UserContext';

export default function SignUpForm() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {setUser} = useContext(UserContext);

    async function handleSubmit() {
        if (!fName) setError('Please fill the first name field!');
        else if (!lName) setError('Please fill the last name field!');
        else if (!username) setError('Please fill the username field!');
        else if (!email) setError('Please fill the email field!');
        else if (!password) setError('Please fill the password field!');
        else if (!confirmPassword) setError('Please fill the confirm password field!');
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) setError('Please enter a valid email!');
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) setError(
            `Please enter a password that contains:
            At least 8 characters in length.
            At least 1 special character.
            At least 1 number.`
        );
        else if (password !== confirmPassword) setError('Passwords don\'t match!');
        else if (await checkEmailPresent(email)) setError('Email already exists');
        else submitUser();
    }

    async function checkEmailPresent(email) {
        const {data} = (await axios.get(`http://localhost:3000/users?email=${encodeURI(email)}`));
        return data.length !== 0;
    }

    function submitUser() {
        axios
        .post('http://localhost:3000/users', {
            firstName: fName,
            lastName: lName,
            username,
            email,
            password
        })
        .then(onSuccess)
        .catch(err => console.error(err));
    }

    async function onSuccess() {
        const userId = (await axios.get(`http://localhost:3000/users?email=${encodeURI(email)}`)).data[0].id;
        const {data: {id: cartId}} = await axios.post('http://localhost:3000/carts', {
            userId,     
            products: [],
            total: 0,
            discountedTotal: 0,
            totalProducts: 0,
            totalQuantity: 0
        });
        const user = {
            id: userId,
            firstName: fName,
            lastName: lName,
            username,
            email,
            password,
            cartId
        }
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
        setUser(user);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign Up</h1>
            <FormControl label="First Name" type="text" value={fName} rootStyleOverride={{ margin: '1rem 0' }} onChange={(e) => setFName(e.target.value)}/>
            <FormControl label="Last Name" type="text" value={lName} rootStyleOverride={{ margin: '1rem 0' }} onChange={(e) => setLName(e.target.value)}/>
            <FormControl label="Username" type="text" value={username} rootStyleOverride={{ margin: '1rem 0' }} onChange={(e) => setUsername(e.target.value)}/>
            <FormControl label="Email" type="email" value={email} rootStyleOverride={{ margin: '1rem 0' }} onChange={(e) => setEmail(e.target.value)}/>
            <FormControl label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <FormControl label="Confirm Password" type="password" value={confirmPassword} rootStyleOverride={{ margin: '1rem 0' }} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <pre style={{ color: 'red', whiteSpace: 'pre-line' }}>{error}</pre>
            <FancyButton text="SIGN UP" width="230px" margin="3rem auto .5rem auto" onClick={handleSubmit}/>
            <FancyButton text="LOGIN?" width="230px" margin=".5rem auto 3rem auto" onClick={() => navigate('/login')} />
        </div>
    );
}