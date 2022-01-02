import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
//22.2.4
import Cart from '../components/Cart';

const Home = () => {
  //22.1.6 removed as it is no longer used
  // const [currentCategory, setCategory] = useState("");

  return (
    <div className='container'>
      {/* removed setCatebory={setCategory} as it is no longer needed */}
      <CategoryMenu />
      {/* removed currentCategory={currentCategory} as it is no longer needed */}
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
