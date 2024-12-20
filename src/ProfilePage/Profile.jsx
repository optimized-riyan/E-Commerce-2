import styles from './Profile.module.css';
import FancyButton from '../FancyButton';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const { user: {firstName, lastName, username, email} } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!firstName) navigate('/login');
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