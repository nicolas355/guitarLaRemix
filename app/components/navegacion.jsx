import { Link, useLocation } from "@remix-run/react";
import imagen from '../../public/img/carrito.png'
const Navegacion = () => {

    
    const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
        inicio
      </Link>

      <Link
        className={location.pathname === "/nosotros" ? "active" : ""}
        to={"/nosotros"} >
        Nosotros
      </Link>

      <Link
        className={location.pathname === "/tienda" ? "active" : ""}
        to={"/tienda"}
      >
        Tienda
      </Link>

      <Link
        className={location.pathname === "/blog" ? "active" : ""}
        to={"/blog"}
      >
        Blog
      </Link>

      <Link
  
        to={"/carrito"} >
       <img src={imagen} alt="carrito_de_compras" />
      </Link>



    </nav>
  );
};

export default Navegacion;
