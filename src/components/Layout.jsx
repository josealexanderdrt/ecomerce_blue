import { Outlet } from "react-router-dom";
import NavigationE from "../pages/NavigationE";

const Layout = () => {
  return (
    <>
      <div>
        <h1>Welcome</h1>
        <NavigationE />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;


{
    /*

  
  Layout.jsx
  4.2) Se crea el componente layout y en este componente se cargara la aplicacion
    tendra el NavBar 
    y tambien se cargaran los otros componentens 
  El objetivo es utilizar el layout como la estructura basica de mi sitio web y tenga la posibilidad los pages o components 
  y permite utilizar el componente OULET 
  
  OULET:  permite 
  
  esto bien y componen outlet básicamente me va a permitir a mí cargar acá cualquier cosa que yo traiga como un nuevo componente quedaria asi:
  
  <Routes>
          <Route path="/" element={<Layout />}>  COMPONENTE PRINCIPAL  <Route> ETIQUETA ABIERTA 
            <Route index element={<Home />} />  SE USA LA PALABRA INDEX PARA CARGAR EL COMPONENTE HOME 
          <Route path="about" element={<AboutUs />} /> SUB COMPONENTE 
            <Route path="/products" element={<Products />} /> SUB COMPONETE 
          </Route>                                                       <Route/> ETIQUETA CERRADA 
        </Routes>
  
  
  */
  }
  