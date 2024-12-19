import Carousel from './HomePage/Carousal';
import Login from './LoginPage/Login';
import Parallaxx from './HomePage/parallaxx';
import FancyButton from './FancyButton';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserData from './HomePage/userdata';
import Form from './LoginPage/Form';
import Footer from './Footer/Footer';
import ContactForm from './ContactUs/ContactForm';
import ContactCarousel from './ContactUs/ContactCarousel';
import NavBar from './NavBar/NavBar'
function App() {
    return (
        <>
           
           

            {/* <Router>
           <Parallaxx/>
            <Carousel />
                  <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/userdata" element={<UserData />} />
                  </Routes>
                </Router> */}
                {/* <Footer/> */}
                {/* <Footer/> */}
                <NavBar/>
                <ContactCarousel/>
                <ContactForm/>
                <Footer/>
        </>
    );
}

export default App;
