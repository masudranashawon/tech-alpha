import { useSelector } from "react-redux";
import Card from "../components/Card";
const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);
  console.log(data);
  return (
    <div className='products-secion container mx-auto py-10'>
      <h2 className='section-title text-2xl uppercase text-center font-bold space-font mb-10'>
        Browse all products
      </h2>
      <div className='products-wrapper grid grid-cols-1 gap-10 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4'>
        {status && (
          <p
            className={`col-span-full text-2xl text-center justify-center  ${
              status === "Something went wrong, please try again later!"
                ? "text-rose-500 font-bold"
                : "text-violet-500"
            }`}
          >
            {status}
          </p>
        )}
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
