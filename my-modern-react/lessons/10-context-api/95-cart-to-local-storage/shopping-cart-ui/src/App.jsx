import React from 'react';

import Header from './components/Header';
import ProductList from './components/ProductList';

//No longer need state or useEffect here since we are using context
export default function App() {  
  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-100 p-6'>
        <h1 className='text-3xl font-bold mb-6'>🛒 Product Catalog</h1>

        {/* removed the `products` prop from the `ProductList` component. 
        We don't need that because we will get the products from the context. */}
        <ProductList  />
      </div>
    </>

  );
}
