import { useSelector } from "react-redux";
import Card from "../components/Card";
import { TbLoader } from "react-icons/tb";

const Products = () => {
  //Accessing state from products slice
  const { items: data, status } = useSelector((state) => state.products);

  return (
    <div className='products-secion container mx-auto py-10'>
      <h2 className='section-title text-xl lg:text-2xl uppercase text-center font-bold space-font mb-10'>
        Browse all products
      </h2>
      <div className='products-wrapper grid grid-cols-1 gap-10 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4'>
        {/* If there is an error while receiving data from the API */}
        {status === "rejected" && (
          <p className='col-span-full text-xl lg:text-2xl text-center justify-center text-rose-500 font-bold'>
            Something went wrong, please try again later!
          </p>
        )}

        {/* This is a loading spinner */}
        {status === "pending" && (
          <p className='col-span-full text-2xl text-center justify-center text-violet-500'>
            <TbLoader className='animate-spin inline-block' />
          </p>
        )}

        {/* If data comes from the API successfully */}
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
