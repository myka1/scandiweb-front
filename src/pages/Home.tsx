import HomeHeader from "../components/HomeHeader";
import HomeMain from "../components/HomeMain";
import { useState, useEffect } from "react";
import axios from "axios";

export type Product = {
  id: string;
  sku: string;
  name: string;
  price: string;
  type: string;
  attribute: string;
  value: string;
};

const client = axios.create({
  baseURL: "http://localhost/web-app/api/product",
});

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await client.get("/read");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  // Add/Remove checked item from list
  const handleCheck = (event: {
    target: { checked: boolean; value: string };
  }) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handleDelete = async () => {
    try {
      const data = {
        id: checked,
      };
      await client.delete(`/delete_selected/`, { data });
      const updatedProducts = products.filter(
        (product) => !checked.includes(product.id)
      );
      setProducts(updatedProducts);
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <>
      <HomeHeader handleDelete={handleDelete} />
      <HomeMain products={products} handleCheck={handleCheck} />
    </>
  );
};

export default Home;
