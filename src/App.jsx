import Carousel from './HomePage/Carousal';
import Login from './LoginPage/Login';
import Parallaxx from './HomePage/parallaxx';
import FancyButton from './FancyButton';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserData from './HomePage/userdata';
import Form from './LoginPage/Form';
import ProductPage from './ProductPage/ProductPage';

function App() {
    return (
        <>
           
           
          
            <Router>
           <Parallaxx/>
            <Carousel />
                  <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/userdata" element={<UserData />} />
                    <Route path="/products" element={<ProductPage />} />
                  </Routes>
                </Router>
        </>
    );
}

export default App;
