import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Home from "./HomePage/Home";
import ProductPage from "./ProductPage/ProductPage";
import ProductDetail from "./ProductDetail/ProductDetail";
import UserData from "./HomePage/userdata";
import Cart from "./Cart/Cart";
import Profile from "./ProfilePage/Profile";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./About/AboutUs";
import SuperLayout from "./SuperLayout";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import SignUp from './LoginPage/SignUp';


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route element={<SuperLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/userdata" element={<UserData />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products">
              <Route index element={<ProductPage />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
