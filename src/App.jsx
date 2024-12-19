import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './LoginPage/Login';
import Home from './HomePage/Home';
import ProductPage from './ProductPage/ProductPage';
import UserData from './HomePage/userdata';
import CartDetails from "./Cart/Cart";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/userdata" element={<UserData />} />
                <Route path="/cart" element={<CartDetails />}/>
            </Routes>
        </Router>
    );
}

export default App;