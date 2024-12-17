import { useState } from 'react';
import styles from './LanguageDropdown.module.css';

export default function LanguageDropdown() {
    const [lang, setLang] = useState('English');
    
    function changeLang(e) {
        setLang(e.target.innerHTML);
    }

    return (
        <div className={styles.container}>
            <p className={styles.langDisplay}>{lang}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
            <ul className={styles.list}>
                <li className={styles.listItem} onClick={changeLang}>English</li>
                <li className={styles.listItem} onClick={changeLang}>German</li>
                <li className={styles.listItem} onClick={changeLang}>Spanish</li>
                <li className={styles.listItem} onClick={changeLang}>Greek</li>
            </ul>
        </div>
    );
}