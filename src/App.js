import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Category from "./pages/Category";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div className='app min-h-screen bg-gray-50 text-lg text-gray-700'>
        <Navbar />
        {/* This ToastContainer for toast notification */}
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/products/category/:category' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
