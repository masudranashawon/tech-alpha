import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getSubtotal,
  removeFromCart,
} from "../features/products/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Cart = () => {
  const { cartItems: data, cartTotalAmount: subtotal } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const removeCartHandler = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getSubtotal());
  }, [data, dispatch]);

  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  return (
    <div className='cart-section container mx-auto py-10'>
      <h2 className='section-title text-2xl font-bold space-font text-center uppercase mb-10'>
        {data.length > 0
          ? `Your have added ${data.length} item${data.length > 1 ? "s" : ""}`
          : "Your cart is empty"}
      </h2>
      <div className='text-center'>
        {data.length === 0 && (
          <Link
            to='/products'
            className='text-sky-500 font-medium text-lg gap-2 flex justify-center items-center group'
          >
            <span className='group-hover:-translate-x-2 group-hover:text-orange-500 duration-300'>
              <BsArrowLeft />
            </span>
            <span className='group-hover:text-orange-500'>Start shopping</span>
          </Link>
        )}
      </div>
      {data.length > 0 && (
        <>
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
                      <button
                        onClick={() => removeCartHandler(product)}
                        className='text-gray-400 uppercase hover:text-rose-500 duration-300'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className='unit-price'>
                    <span>{currencyFormatter(product.price)}</span>
                  </div>
                  <div className='counter flex'>
                    <button
                      onClick={() => handleDecrease(product)}
                      className='bg-gray-100 w-10 h-10 border border-gray-300 active:bg-gray-700 active:text-gray-50'
                    >
                      -
                    </button>
                    <span className='bg-gray-100 w-10 h-10 border border-gray-300 flex justify-center items-center'>
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(product)}
                      className='bg-gray-100 w-10 h-10 border border-gray-300 active:bg-gray-700 active:text-gray-50'
                    >
                      +
                    </button>
                  </div>
                  <div className='total-price font-medium ml-auto'>
                    <span>
                      {currencyFormatter(product.price * product.cartQuantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='cart-lower-sec flex justify-between items-start py-10'>
            <button
              onClick={() => dispatch(clearCart())}
              className='clear-btn py-3 px-8 border uppercase font-medium hover:bg-rose-200 hover:text-rose-600 hover:border-rose-500 duration-300'
            >
              Clear cart
            </button>
            <div className='flex flex-col items-start gap-2'>
              <div className='subtotal flex justify-between w-full font-medium text-2xl'>
                <span className='text-sky-500'>Subtotal</span>
                <span className='text-rose-500'>
                  {currencyFormatter(subtotal)}
                </span>
              </div>
              <p className='tax-note text-gray-400'>
                Taxes and shipping costs are calculated at the checkout
              </p>
              <Link
                to='/'
                className='bg-sky-500 text-sky-50 w-full text-center py-3 uppercase font-medium tracking-widest hover:bg-sky-600 duration-300'
              >
                Checkout
              </Link>
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
        </>
      )}
    </div>
  );
};

export default Cart;
