import { Route, Routes}  from 'react-router-dom'; 
import ProductDetail from '../components/ProductDetail';
import { ProductContext } from "../context/ProductsProvider"
import { useContext } from 'react';
import ProductsList from '../components/ProductsList';

const Products = () => {
  const {produtcsApi, formatNumber} = useContext(ProductContext)

  return (
    <>
    <h4>Products Page</h4>
    <Routes>
      <Route index element={<ProductsList/>}/>
      <Route path=":productId" element={<ProductDetail/>}/>
      
    </Routes>
    
    </>
  )
}

export default Products