import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbLoader } from "react-icons/tb";
import axios from "axios";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch the single product data using Axios or any other method
        const response = await axios.get(
          `http://localhost:8080/api/products/${productId}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error(error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading)
    return (
      <p className='col-span-full text-2xl text-center justify-center text-violet-500'>
        <TbLoader className='animate-spin inline-block' />
      </p>
    );

  if (!product) return <div>Product not found</div>;

  console.log(product);
  return (
    <div>
      <h1>{product._id}</h1>
      <h1>{product.name}</h1>
    </div>
  );
};

export default Product;
