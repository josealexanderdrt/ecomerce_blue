import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const ProductContext= createContext();
const URL = 'https://dummyjson.com/products'

const ProductsProvider = ({children}) => {
    const [produtcsApi, setProdutcsApi] = useState([]);

    const getProductsApi = async () => {
        try{
            const response = await axios.get(URL);
            if (response.status !==200){
                throw new Error("Not Data");
            }
            setProdutcsApi(response.data.products)
        }catch (error){
            console.log(error.message)
        }
    };

    function formatNumber(number){
        return new Intl.NumberFormat( "es-US",{
          style: 'currency',
          currency:'USD'
        }
        ).format(number)
      } 

      useEffect(() => {
        if (productId) {
            getProductDetailApi(productId);
        }
    }, [productId, getProductDetailApi]);
  return (
    <>
    <ProductContext.Provider value={{
       produtcsApi,
       setProdutcsApi,
       formatNumber 
    }}>
        {children}
    </ProductContext.Provider>
   </>
  )
}

export default ProductsProvider