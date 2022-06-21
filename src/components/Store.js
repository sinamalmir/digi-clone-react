import React , { useContext } from 'react';
import { Container } from 'react-bootstrap';

// components
import Product from './shared/Product';
import "../style/Store.css";
// context
import { ProductsContext } from '../context/ProductContextProvider';
 
const Store = () => {

    
    const products = useContext(ProductsContext);

    return (
        <Container>
           
            <div className='store-container'>
                {
                    products.map(product => <Product key={product.id} productData={product} /> )
                }
            </div>
           
        </Container>
            
    );
};

export default Store;