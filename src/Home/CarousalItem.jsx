import styles from './CarousalItem.module.css';

export default function CarousalItem({title = 'Give Title', imgSrc = 'https://placehold.co/100x100'}) {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={imgSrc} alt="Img Not Found" />
            <p className={styles.title}>{title}</p>
        </div>
    );
}