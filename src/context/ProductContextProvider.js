import React , { useState , useEffect , createContext } from 'react';

// API
import { getProducts } from '../services/api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products , setProduct ] = useState([]);

    useEffect(() => {
        // async await 
        const fetchAPI = async () => { 
             setProduct(await getProducts());
        }
         
        fetchAPI();
    },[])


    return (
        <ProductsContext.Provider value={products} >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;


