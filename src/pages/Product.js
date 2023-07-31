import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TbLoader } from "react-icons/tb";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { addToCart } from "../features/products/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch the single product data using Axios or any other method
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/products/${productId}`
        );

        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error(error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading)
    return (
      <p className='col-span-full text-2xl text-center justify-center text-violet-500'>
        <TbLoader className='animate-spin inline-block' />
      </p>
    );

  if (!product)
    return (
      <div className='container mx-auto py-10'>
        <p className='text-xl lg:text-2xl text-center justify-center text-rose-500 font-bold'>
          Product not found
        </p>
      </div>
    );

  //Click add to cart button & dispatch product
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className='single-product-section w-screen h-auto lg:h-screen container mx-auto py-10'>
      <div className='grid w-full h-full grid-cols-1 md:grid-cols-2 items-center gap-5'>
        <div className='product-image w-full h-full p-5 md:p-10'>
          <div className='w-full h-full flex items-center justify-center  bg-white mx-auto shadow-lg rounded-xl overflow-hidden'>
            <img
              src={product.image}
              alt={product.name}
              className='w-[80%] h-[80%] object-cover'
            />
          </div>
        </div>

        <div className='product-content flex flex-col gap-3 md:gap-5 p-5'>
          <span className='category-tag text-sm font-semibold text-teal-500 uppercase tracking-widest'>
            {product.category}
          </span>
          <h2 className='product-name sm:text-2xl font-medium text-xl'>
            {product.name}
          </h2>
          <p className='text-gray-500 text-lg md:text-xl'>
            {product.description}
          </p>
          <span className='md:text-2xl text-xl font-semibold text-rose-500'>
            {/* //This fucntion for formate price in USD currency */}
            {currencyFormatter(product.price)}
          </span>

          <div className='add-to-cart mt-2 md:mt-5'>
            <button
              onClick={() => addToCartHandler(product)}
              className='md:text-lg text-sm bg-violet-500 text-violet-50 font-medium py-3 px-8 uppercase rounded-md hover:bg-orange-500 hover:text-orange-50 shadow-lg shadow-violet-300 hover:shadow-orange-300 duration-300'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
