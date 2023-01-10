import { NavLink } from "react-router-dom";

const Footer = () => {
  //Menu active style
  const isNavActiveStyles = ({ isActive }) => {
    return {
      color: isActive ? "#d4d4d4" : null,
    };
  };

  return (
    <footer className='text-sm md:text-lg footer mx-auto text-center py-10 bg-violet-700 text-violet-50 flex flex-col justify-center items-center gap-5'>
      <div className='flex md:gap-5 gap-3'>
        <NavLink end to='/' style={isNavActiveStyles}>
          Home
        </NavLink>
        <NavLink to='/products' style={isNavActiveStyles}>
          Products
        </NavLink>
      </div>
      <p>&copy; {new Date().getFullYear()} Tech Alpha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
