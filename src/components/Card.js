import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
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

          {/* Link to the single product page */}
          <Link
            className='md:text-lg text-sm text-violet-500 border-violet-500 border font-medium py-2 px-8 uppercase rounded-md hover:bg-orange-500 hover:text-orange-50 hover:border-orange-500 shadow-sm shadow-violet-300 hover:shadow-orange-300 duration-300'
            to={`/products/${product._id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
