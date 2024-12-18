import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.background}>
            <ul className={styles.linksList}>
                <li><StyledLink text={'Imprint'} /></li>
                <li><StyledLink text={'Privacy Policy'} /></li>
                <li><StyledLink text={'Distribution Rights'} /></li>
            </ul>
            <p className={styles.copyright}>Copyright ©2024 Vitra International AG. All rights reserved</p>
            <StyledLink text={'Cookie Settings'} rootStyle={{ margin: 'auto' }} />
        </div>
    );
}

function StyledLink({text = 'no text', rootStyle = {}}) {
    return <a href="#" className={styles.link} style={rootStyle}>{text}</a>;
}