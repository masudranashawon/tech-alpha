import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  //Accessing state from cart slice
  const { cartItems } = useSelector((state) => state.cart);

  //Menu active style
  const isNavActiveStyles = ({ isActive }) => {
    return {
      color: isActive ? "#d4d4d4" : null,
    };
  };

  return (
    <div className='navbar-bg bg-violet-500 text-violet-50 h-28 sm:h-20 flex justify-center items-center p-10 sm:p-0'>
      <div className='navbar container mx-auto flex items-center justify-between flex-col gap-3 sm:gap-0 sm:flex-row'>
        <div className='left'>
          <Link to='/' className='group'>
            <span className='logo text-xl font-semibold group-hover:text-orange-500 duration-300'>
              tech
              <span className='text-orange-500 group-hover:text-violet-50 duration-300'>
                Alpha
              </span>
            </span>
          </Link>
        </div>
        <div className='right flex items-center gap-5'>
          <NavLink end to='/' className='nav-link' style={isNavActiveStyles}>
            Home
          </NavLink>
          <NavLink
            to='/products'
            className='nav-link'
            style={isNavActiveStyles}
          >
            Products
          </NavLink>
          <Link to='/cart'>
            <span className='cart-icon relative'>
              <BsCart3 />
              <span className='cart-counter absolute -top-3 -right-3 text-xs bg-orange-600 font-medium rounded-full w-5 h-5 flex justify-center items-center z-[1]'>
                {cartItems.length}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
