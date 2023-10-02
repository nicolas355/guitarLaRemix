import { useState, useEffect } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import styles from "~/style/index.css";

import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
  return [
    {
      charset: "utf-8",
      title: "GuitarLA-Remix",
      viewport: "width=device-width, initial-scale=1.0",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },

    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "true",
    },

    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },

    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function app() {

  

  useEffect(() => {
    const carritoLS = typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];
    
    // Setear el carrito después de que la aplicación esté renderizada en el cliente
    setCarrito(carritoLS);
  }, []);

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      // iterar sobre el arreglo, e identificar el elemento duplicado
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          // rescribimos
          guitarraState.cantidad = guitarra.cantidad;
        }

        return guitarraState;
      });

      //añadir al carrito

      setCarrito(carritoActualizado);
    } else {
      // registro nuevo
      setCarrito([...carrito, guitarra]);
    }
  };
  

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }

      return guitarraState;
    });

    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarraState) => guitarraState.id !== id
    );
    setCarrito(carritoActualizado);
  };
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>guitarLA</title>
      </head>
      <body>
        <Header />
        {children}

        <Scripts />

        <LiveReload />

        <Footer />
      </body>
    </html>
  );
}

/* manejo de errores*/

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="error_cuatro">
        <h1>Pagina no encontrada</h1>
        <a href="/">Inicio</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/tienda">Tienda</a>
        <a href="/blog">Blog</a>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
