import styles from './FormControl.module.css';

export default function FormControl({label = 'No Label', type = 'text', rootStyleOverride = {}}) {
    let inputId = crypto.randomUUID();
    return (
        <div className={styles.outerContainer} style={rootStyleOverride}>
            <div className={styles.innerContainer}>
                <label htmlFor={inputId} className={styles.label}>{label}</label><br />
                <input className={styles.input} type={type} id={inputId} />
            </div>
        </div>
    );
}