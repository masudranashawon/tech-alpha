import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <div className='container mx-auto mt-20 text-center'>
      <h2 className='lg:text-8xl text-5xl font-semibold text-orange-500'>
        404
      </h2>
      <p className='lg:text-4xl text-2xl mb-10'>Page not found</p>
      <Link
        to='/'
        className='text-sky-500 font-medium text-lg gap-2 flex justify-center items-center group'
      >
        <span className='group-hover:-translate-x-2 group-hover:text-orange-500 duration-300'>
          <BsArrowLeft />
        </span>
        <span className='group-hover:text-orange-500'>Go to home</span>
      </Link>
    </div>
  );
};

export default NotFound;
