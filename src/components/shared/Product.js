import React from 'react';
import { shorten } from '../../helper/functions';

const Product = ({productData}) => {

   

    return (
        <>
        <div style={{marginBottom:"100px"}}>
                <div>            
                    <img src={productData.image} alt="products" style={{width:"150px",height:"150px"}} />
                    <h3 style={{fontSize:"14px"}}> {shorten(productData.title)} </h3>
                    <p>{productData.price}</p>
                    <div>
                        <a>Details</a>
                        <div>
                            <button>add to cart </button>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Product;
