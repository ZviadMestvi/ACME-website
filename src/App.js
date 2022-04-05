import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Home from './components/home/Home';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Donate from './components/donate/Donate';
import Contact from './components/contact/Contact';
import ProductPage from './components/shop/ProductPage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <MobileMenu />
      <Routes>
        <Route path="/*" element={<Navigate to="" />} />
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
