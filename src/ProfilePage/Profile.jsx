import styles from './Profile.module.css';
import FancyButton from '../FancyButton';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
    const [{firstName, lastName, username, email}, setUser] = useState({});

    useEffect(() => {
        axios.get('https://dummyjson.com/users/1')
            .then(response => {
                setUser(curr => response.data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.helloMsg}>HELLO {firstName}</h1>
            <table className={styles.fieldTable}>
                <tbody>
                    <tr>
                        <td className={styles.tableData}><Field title='FIRST NAME' value={firstName} /></td>
                    </tr>
                    <tr>
                        <td className={styles.tableData}><Field title='LAST NAME' value={lastName} /></td>
                    </tr>
                    <tr>
                        <td className={styles.tableData}><Field title='USERNAME' value={username} /></td>
                    </tr>
                    <tr>
                        <td className={styles.tableData}><Field title='EMAIL ADDRESS' value={email} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function Field({title = 'no title', value = 'no value', rootStyle = {}}) {
    return (
        <div className={styles.fieldContainer} style={rootStyle}>
            <p className={styles.fieldTitle}>{title}</p>
            <p className={styles.fieldValue}>{value}</p>
            <div className={styles.editBtnContainer}><FancyButton text='EDIT' width='6rem' /></div>
        </div>
    );
}