import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let reponce = await fetch(url);
    let data = await reponce.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
