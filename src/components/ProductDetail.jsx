import { useParams,Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { ProductContext } from "../context/ProductsProvider"



const ProductDetail = () => {

  const {formatNumber} = useContext(ProductContext)
    const {productId} = useParams();
    const [produtcsApiDetail, setProdutcsApiDetail] = useState(null);
    const getProductsApiDetail = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        if (response.status !== 200) {
          throw new Error("No hay Data");
        }
        setProdutcsApiDetail(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    useEffect(() => {
      getProductsApiDetail()
     
    }, [productId]);

  return (

    <>
    {produtcsApiDetail === null && <h1>Cargando</h1>}
    {produtcsApiDetail && (
      <>
    <h1>{produtcsApiDetail.title}</h1>
    <h4>{produtcsApiDetail.description}</h4>
    <h4>{produtcsApiDetail.category}</h4>
    <figure> <img src={produtcsApiDetail.thumbnail} alt={produtcsApiDetail.title} /> </figure>
    <h4> {formatNumber(produtcsApiDetail.price)}</h4>
    <Link
    to="/products"
    > Back to Products Page</Link>


    <h4>Product Detail Page : {productId}</h4>
    
   </> )}
    </>
  )
}

export default ProductDetail