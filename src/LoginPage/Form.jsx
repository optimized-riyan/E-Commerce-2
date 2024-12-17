import FormControl from "./FormControl";
import styles from './Form.module.css';
import FancyButton from '../FancyButton';

export default function Form() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <FormControl label="Email" type="email" rootStyleOverride={{ margin: '1rem 0' }} />
            <FormControl label="Password" />
        </div>
    );
}