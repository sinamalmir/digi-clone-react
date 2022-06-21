import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

// get api with async await
const getProducts = async () => {
     const response = await axios.get(`${BASE_URL}/products`);
     return response.data
}

export {getProducts}




