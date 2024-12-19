import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Home from "./HomePage/Home";
import ProductPage from "./ProductPage/ProductPage";
import ProductDetail from "./ProductDetail/ProductDetail";
import UserData from "./HomePage/userdata";
import CartDetails from "./Cart/Cart";
import Profile from "./ProfilePage/Profile";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from './About/AboutUs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/userdata" element={<UserData />} />
                <Route path="/cart" element={<CartDetails />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/about" element={<AboutUs />}/>
                <Route path="/products">
                    <Route index element={<ProductPage />} />
                    <Route path="detail/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
