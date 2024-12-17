import styles from './Carousal.module.css';
import CarousalItem from "./CarousalItem";
import chairsImg from '../assets/Home/chairs.jpg';
import diningTablesImg from '../assets/Home/dining-tables.jpg';
import desksImg from '../assets/Home/desks.jpg';
import officeChairsImg from '../assets/Home/office-chairs.jpg';

const items = [
    {title: 'Chairs', imgSrc: chairsImg},
    {title: 'Dining Tables', imgSrc: diningTablesImg},
    {title: 'Desks', imgSrc: desksImg},
    {title: 'Office Chairs', imgSrc: officeChairsImg},
    {title: 'Chairs', imgSrc: chairsImg},
    {title: 'Dining Tables', imgSrc: diningTablesImg},
    {title: 'Desks', imgSrc: desksImg},
    {title: 'Office Chairs', imgSrc: officeChairsImg},
];

export default function Carousel() {
    return (
        <div>
            <h1 className={styles.heading}>Product Categories</h1>
            <ul className={styles.carouselList}>
                {items.map(({title, imgSrc}) => <li key={crypto.randomUUID()}><CarousalItem title={title} imgSrc={imgSrc} /></li>)}
            </ul>
        </div>
    );
}