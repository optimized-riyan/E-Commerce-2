import styles from './Profile.module.css';
import FancyButton from '../FancyButton';

export default function Profile() {
    return (
        <div className={styles.container}>
            <h1 className={styles.helloMsg}>HELLO RIYAN</h1>
            <table className={styles.fieldTable}>
                <tbody>
                    <tr>
                        <td className={styles.tableData}><Field title='FIRST NAME' value='RIYAN' /></td>
                    </tr>
                    <tr>
                        <td className={styles.tableData}><Field title='LAST NAME' value='GONSALVES' /></td>
                    </tr>
                    <tr>
                        <td className={styles.tableData}><Field title='USERNAME' /></td>
                    </tr>
                    <tr>
                        <td className={styles.tableData}><Field title='EMAIL ADDRESS' /></td>
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