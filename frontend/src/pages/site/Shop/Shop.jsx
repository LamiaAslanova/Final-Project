import React, { useContext } from 'react';
import Categories from '../../../components/site/ShopComponents/Categories/Categories';
import Top from '../../../components/site/ShopComponents/Top/Top';
import MainContext from '../../../context/context';

const Shop = () => {

  return (
    <main>
      <Top />
      <Categories />
    </main>
  );
}

export default Shop;
