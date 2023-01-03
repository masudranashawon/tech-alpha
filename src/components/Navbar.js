import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className='navbar-bg bg-violet-500 text-violet-50 h-20 flex justify-center items-center'>
      <div className='navbar container mx-auto flex items-center justify-between'>
        <div className='left'>
          <span className='logo text-xl font-semibold'>
            tech<span className='text-orange-500'>Alfa</span>
          </span>
        </div>
        <div className='right flex items-center gap-5'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/products' className='nav-link'>
            Products
          </Link>
          <Link to='/cart'>
            <span className='cart-icon relative'>
              <BsCart3 />
              <span className='cart-counter absolute -top-3 -right-3 text-xs bg-orange-600 font-medium rounded-full w-5 h-5 flex justify-center items-center z-[1]'>
                10
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
