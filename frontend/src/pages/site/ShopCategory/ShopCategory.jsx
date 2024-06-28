import React, { useContext } from 'react';
import './ShopCategory.css';
import CatCards from '../../../components/site/ShopCatComponents/CatCards/CatCards';
import { useParams } from 'react-router';
import MainContext from '../../../context/context';

const ShopCategory = () => {

    const { shop, setShop } = useContext(MainContext);

    const { category } = useParams();

    const filteredProducts = shop.filter(item => item.category === category);
    console.log(filteredProducts)

    return (
        <main>
            <CatCards filteredProducts={filteredProducts} />
        </main>
    );
}

export default ShopCategory;
