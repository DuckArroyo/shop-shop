import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  //22.1.6 removed as it is no longer used
  // const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      {/* removed setCatebory={setCategory} as it is no longer needed */}
      <CategoryMenu />
      {/* removed currentCategory={currentCategory} as it is no longer needed */}
      <ProductList />
    </div>
  );
};

export default Home;
