import { useState,useEffect } from "react";
import { useOutletContext } from "@remix-run/react";
import styleCarritos from "../style/carrito.css";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styleCarritos,
    },
  ];
}

export function meta() {
  return [
    {
      title: "GuitarLA-Carrito",
      description: "Carrito de los productos GuitarraLA",
    },
  ];
}

function Carrito() {

  
  const [total, setTotal] = useState(0)
  
  const { carrito,actualizarCantidad ,eliminarGuitarra} = useOutletContext();
  useEffect(() => {
    
    const calculoTotal=carrito.reduce((total,producto)=> total + (producto.cantidad* producto.precio),0 )
    setTotal(calculoTotal)
    return () => {
      
    }
  }, [carrito])
  
  return (
    <main className="contenedor">
      <h1>Carrito de compras</h1>

      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>

          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((producto) => {
                return (
                  <div key={producto.id} className="producto">
                    <div className="imagen">
                      <img src={producto.imagen} alt="imagen del producto" />
                    </div>

                    <div>
                      <p className="nombre">{producto.nombre}</p>
                      <p className="precio">
                        {" "} Precio :
                        $ <span> {producto.precio} </span>{" "}
                      </p>
                      <h5>Cantidad  {producto.cantidad} </h5>

                          
                      <select value={producto.cantidad} onChange={e => actualizarCantidad({
                        cantidad:+e.target.value,
                        id:producto.id
                      })} className="select">
                           

                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </select>
                   
                      <p>
                        Subtotal :${" "}
                        <span> {producto.cantidad * producto.precio} </span>
                      </p>
                    </div>


                    <button onClick={()=> eliminarGuitarra(producto.id)} type="button" className="btn-eliminar">X</button>

                  </div>
                );
              })}
        </div>

        <div className="resumen text-white">
          <h3>Resumen</h3>
          <p>Total a pagar :  ${total}  </p>
        </div>


      </div>
    </main>
  );
}

export default Carrito;
