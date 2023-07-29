import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbLoader } from "react-icons/tb";
import axios from "axios";
import Card from "../components/Card";

const Category = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch the category product data using Axios or any other method
        const response = await axios.get(
          `http://localhost:8080/api/products/category/${category}`
        );

        setCategoryProducts(response.data);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error(error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [category]);

  if (loading)
    return (
      <p className='col-span-full py-10 text-2xl text-center justify-center text-violet-500'>
        <TbLoader className='animate-spin inline-block' />
      </p>
    );

  return (
    <div className='category-secion container mx-auto py-10'>
      <h2 className='section-title text-xl lg:text-2xl uppercase text-center font-bold space-font mb-10'>
        {categoryProducts.length > 1 ? (
          `Browse all ${category}s`
        ) : (
          <p className='text-xl lg:text-2xl text-center justify-center text-rose-500 font-bold'>
            Category Not Found!
          </p>
        )}
      </h2>

      <div className='products-wrapper grid grid-cols-1 gap-10 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4'>
        {categoryProducts.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
