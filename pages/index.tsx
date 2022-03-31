import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      {productList.map((product) => (
        <h3>{product.name}</h3>
      ))}
    </div>
  );
};

export default HomePage;
