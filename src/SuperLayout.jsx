import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

export default function SuperLayout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
}