import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/products/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Click add to cart button & dispatch product
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className='product flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl duration-300'>
      <div className='product-img'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-content flex flex-col gap-2 pb-5 px-5'>
        <span className='category-tag text-xs font-semibold text-teal-500 uppercase tracking-widest'>
          {product.category}
        </span>
        <h3 className='product-name sm:text-xl font-medium h-[5rem] md:h-[5.25rem] text-lg'>
          {product.name}
        </h3>
        <p className='text-gray-500 text-sm md:text-lg h-[4rem] md:h-[6rem]'>
          {product.description}
        </p>
        <div className='flex justify-between items-center'>
          <span className='md:text-xl text-lg font-medium text-rose-500'>
            {/* //This fucntion for formate price in USD currency */}
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product)}
            className='md:text-lg text-sm bg-violet-500 text-violet-50 font-medium py-3 px-8 uppercase rounded-md hover:bg-orange-500 hover:text-orange-50 shadow-lg shadow-violet-300 hover:shadow-orange-300 duration-300'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
