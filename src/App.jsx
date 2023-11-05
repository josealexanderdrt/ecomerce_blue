import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import NavigationE from "./pages/NavigationE";
import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/products/*" element={<Products />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /*
1) Lo primero que tenemos que hacer cuando usamos react router, es anidar nuestra aplicacion dentro del Borwser-router para que el concepto de la ruta pueda funcionar, es por eso  que en el archico main.jsx se importa : import { BrowserRouter } from 'react-router-dom' y envuenve a app y  queda asi:   ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

2) se importan los componentes por ejemplo:
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";


3)import { Routes, Route  } from "react-router-dom"; 
---Routes--- es un componente de la bibloteca react- router-dom que se utiliza para definir y agrupar rutas en las aplicaciones ---Route--- en singular es la definiciond de la ruta en si misma para renderizar el componente, usar parametros de ruta renderizacion condicional, navegacion y gestion del historial, y anidacion de rutas 

navigationse.jsx
4) ENLACES  CON LINK  en NavBar 

cuando se trabaja con react router no se pueden crear enlaces de la manera tradicional <a href=""> <a/> ya que esto hara que el explorador se recargue y se pierda toda la informacion. 

Por eso usamos un componente que nos permita mantener toda la logica de la SPA recat router nos da el componente LINK y en lugar se usar la prop href usamos la pro to="/"

4.1 ) hay ocaciones donde queremos que navbar este presente en todo momento, y lo queremos gestionar de una manera mas prolija y mas organizada pensnado en el formato react router 

Con esta funcionalizad lo que hacemos es crear una especie de Layout, para que en este componente podamos renderizar otros de manera mas ordenada



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
Products.jsx
5)ANIDANDO RUTAS DENTRO DE RUTAS 
products/1 o 2 o 3...

Para que pueda funcionar algo asi http://localhost:5173/products/2
Para que esto funcione manteniendo la logica del ejercicio hay que intevenir el componente App.jsx
app.jsx
<Route path="/products/*" element={<Products />}>
para poder seguir anidando rutas dentro de una ruta se usa /*
<Route path="/products| ----> /*"  <----   |element={<Products />}> ese acterico es lo que va a permitir machear rutas dentro de la ruta 
reconoce que tiene ruta anidadas 
Products.jsx
return (
    <>
    <h4>Products Page</h4>
    <Routes>
      <Route path=":productId" element={<ProductDetail/>}/>
    </Routes>
    
    </>
  )

  

  se agrega los dos puntos path=":productId"  para definir que es un parametro
       SI NO SE COLOCAN LOS DOS PUNTOS = sera ura que tiene que ser exacta, lo que escriba despues de / tiene que ser igual a la ruta definida 
       SI SI SE COLOCAN LOS DOD PUNTOS= significa que es una variable que puede cambiar lo que de como resuktado UNA RUTA DINAMICA 


5.1) 


6) ProductDetail.jsx 

COMO CAPTURAR EL VALOR DE UNA RUTA QUE SE ENVIA POR PARAMETRO WWWW.CHILE.CL/PRODUCTOS/???????

Se usa un hook  USEPARAMS,
se utiliza en aplicaciones de react que emplean enrutamiento con react router su funcion prinical  es que permite acceder a los parametros de la url definidos en las rutas que usamos 

Cuando defines rutas en una aplicación web, a menudo deseas que algunas partes de la URL sean variables. Por ejemplo, puedes tener una ruta que se ve así: /usuarios/:id, donde :id es un parámetro que puede cambiar según la URL actual. useParams te permite acceder a este valor variable (id en este caso) y usarlo en tu componente.


No permite acceder a los parametros que se pasan por la ruta, de esta manera se tiene que ejecutar 

Consume los parametros de la ruta  
 const {productId} = useParams();
 lo que devuelte es  un objeto, clave, valor 
 en la clave = nombre del parametro  =  Products.jsx: Route path=":productId" <---- esta es la clave 
 en el valor = el valor del parametro = el valor sera lo que pase por la ruta   http://localhost:5173/products/2 <--- este es el valor 
 un  lo que hicimos aqui fue 



 7) ProductsList.jsx

 Este componente me traera una lista de los productos, y recibira por parametros " asi--->({products})"
 const ProductsList = ({products}) => {
  return (
    <div>ProductsList</div>
  )
}

export default ProductsList

8) Creador de Buscador 
el buscador se hara con un from normal 



luego esto va a  mapear 
*/





}
