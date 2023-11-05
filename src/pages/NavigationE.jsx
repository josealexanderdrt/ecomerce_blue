import {Link} from 'react-router-dom';

const NavigationE = () => {
  return (
    <>
    <Link to="/" >Home</Link>
    <Link to="/about" >About Us</Link>
    <Link to="/products" >Products</Link>
    </>
  )
}

export default NavigationE

{
    /*
   4) ENLACES  CON LINK  en NavBar 
  
  cuando se trabaja con react router no se pueden crear enlaces de la manera tradicional <a href=""> <a/> ya que esto hara que el explorador se recargue y se pierda toda la informacion. 
  
  Por eso usamos un componente que nos permita mantener toda la logica de la SPA recat router nos da el componente LINK y en lugar se usar la prop href usamos la pro to="/"
  
  
  */
  }
  