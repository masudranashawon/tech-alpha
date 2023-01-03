import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className='cart-section container mx-auto py-10'>
      <h2 className='section-title text-2xl font-bold space-font text-center uppercase mb-10'>
        Your cart
      </h2>
      <div className='cart-container'>
        <div className='product-headlines grid grid-cols-5 font-medium uppercase gap-10 border-b pb-3'>
          <div className='col-product col-span-2'>Product</div>
          <div className='col-unit-price'>Unit Price</div>
          <div className='col-quantity'>Quantity</div>
          <div className='col-total-price ml-auto'>Total Price</div>
        </div>
        <div className='products flex flex-col'>
          {data.map((product) => (
            <div
              key={product.id}
              className='product grid grid-cols-5 gap-10 mt-10 border-b pb-5'
            >
              <div className='left-sec col-span-2 flex gap-5'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-32 h-32 object-cover'
                />
                <div className='product-detail flex flex-col items-start gap-3'>
                  <span>{product.name}</span>
                  <button className='text-gray-400 uppercase hover:text-rose-500 duration-300'>
                    Remove
                  </button>
                </div>
              </div>
              <div className='unit-price'>
                <span>{currencyFormatter(product.price)}</span>
              </div>
              <div className='counter flex'>
                <button
                  onClick={() => handleDecrease()}
                  className='bg-gray-100 w-10 h-10 border border-gray-300 active:bg-gray-700 active:text-gray-50'
                >
                  -
                </button>
                <span className='bg-gray-100 w-10 h-10 border border-gray-300 flex justify-center items-center'>
                  {count}
                </span>
                <button
                  onClick={() => handleIncrease()}
                  className='bg-gray-100 w-10 h-10 border border-gray-300 active:bg-gray-700 active:text-gray-50'
                >
                  +
                </button>
              </div>
              <div className='total-price font-medium ml-auto'>
                <span>{currencyFormatter(product.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='cart-lower-sec flex justify-between items-start py-10'>
        <button className='clear-btn py-3 px-8 border uppercase font-medium hover:bg-rose-200 hover:text-rose-600 hover:border-rose-500 duration-300'>
          Clear cart
        </button>
        <div className='flex flex-col items-start gap-2'>
          <div className='subtotal flex justify-between w-full font-medium text-2xl'>
            <span className='text-sky-500'>Subtotal</span>
            <span className='text-rose-500'>$200.56</span>
          </div>
          <p className='tax-note text-gray-400'>
            Taxes and shipping costs are calculated at the checkout
          </p>
          <button className='bg-sky-500 text-sky-50 w-full text-center py-3 uppercase font-medium tracking-widest hover:bg-sky-600 duration-300'>
            Checkout
          </button>
          <div className='continue-shopping'>
            <Link
              to='/products'
              className='text-sky-500 font-medium text-lg gap-2 flex items-center group'
            >
              <span className='group-hover:-translate-x-2 group-hover:text-orange-500 duration-300'>
                <BsArrowLeft />
              </span>
              <span className='group-hover:text-orange-500'>
                Continue shopping
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
