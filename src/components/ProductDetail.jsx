import { useParams } from "react-router-dom";
import { ProductDetailContext } from "../context/ProductDetailProvider"
import { useContext, useEffect } from 'react';

const ProductDetail = () => {
    const {productId} = useParams();
    const {getProductDetailApi,productDetailApi} = useContext(ProductDetailContext)
 
    console.log('productDetail: {}',productDetailApi);

    if(productId){
        getProductDetailApi(productId);
    }
   

  return (

    <>
    <h1>{productDetailApi.title}</h1>

    
    <h4>Product Detail Page : {productId}</h4>
    </>
  )
}

export default ProductDetail