import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div
      className='slide'
      style={{ backgroundImage: `url(${image.src}) ` }}
      key={image.id}
    >
      <div className='slide-content container mx-auto h-full flex flex-col gap-5 justify-center items-start text-violet-50'>
        <h1 className='text-[7vw] uppercase w-4/5 font-bold space-font leading-none'>
          {image.headline}
        </h1>
        <p className='sm:w-3/5 text-sm sm:text-lg w-full'>{image.body}</p>
        <Link
          to={`products/${image.category}`}
          className='slide-cta-btn border border-violet-50 w-60 h-10 font-light text-sm sm:text-lg sm:w-72 sm:h-14 sm:font-medium mt-5 hover:text-orange-50 duration-300 relative'
        >
          <span className='w-full xs:h-full text-center absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-[2]'>
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
