import { useContext } from "react"
import { ProductContext } from "../context/ProductsProvider"
import { Link } from "react-router-dom"

const ProductsList = () => {
    const {produtcsApi} = useContext(ProductContext)
    
  return (
    <>
   
    <ul>
        {produtcsApi.map((productsRender) =>{
            return(
                <li
                key={productsRender.id}>
                    <h4>{productsRender.title}</h4>
                    <Link
                    to={`/products/${productsRender.id}`}
                    >More Details</Link>
                </li>
            )
        })}
    </ul>

    
    </>
  )
}

export default ProductsList