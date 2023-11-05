import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const ProductDetailContext= createContext();
const detailUrl = 'https://dummyjson.com/products/'


const ProductDetailProvider = ({children}) => {
  
  
  {/* */}  const [productId] = useState();
    const [productDetailApi, setProductDetailApi]= useState({});

    const getProductDetailApi = async (idProduct) => {
        try{
            console.log("idProduct:{}",idProduct)
            if(idProduct){
            const response = await axios.get(detailUrl+idProduct);
            if (response.status !==200){
                throw new Error("Not Data");
            }
            console.log("respose.data:{}",response.data);
            setProductDetailApi(response.data)
        }
        }catch (error){
            console.log(error.message)
        }
    }; 

    useEffect(() => {
        getProductDetailApi();
    }, []);

  return (
    <>
    <ProductDetailContext.Provider value={{
       productDetailApi,
       getProductDetailApi
    }}>
        {children}
    </ProductDetailContext.Provider>
    
   </>
  )
}

export default ProductDetailProvider


import React from 'react'

