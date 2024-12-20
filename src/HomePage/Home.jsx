import Navbar from '../NavBar/NavBar';
import Video from './video';
import Catalogue from './Catalogue';
import Parallaxx from './parallaxx';
import AboutVitra from './AboutVitra';
import Carousal from './Carousal';
import Footer from '../Footer/Footer';
import Form from '../LoginPage/Form';
import { Route, Router, Routes } from 'react-router-dom';
import UserData from './userdata';
// import Cart from '../Cart/Cart';
import CartDetails from '../Cart/Cart';
import CheckOut from '../Checkout/Checkout';
export default function Home() {
    return (
        <>
            <Video />
            <Catalogue />
            <Parallaxx />
            <AboutVitra />
            <Carousal margin='1rem 0 6rem 0' />
        </>
    );
}