import { Link } from "@remix-run/react"

import {formatearFecha} from '../utils/helpers'

export default function Post({post}) {

    const {contenido,imagen,Titulo,url,publishedAt}=post
  return (
   <article className="post">
    <img src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${Titulo}`} />

    <div className="contenido">
        <h3> {Titulo} </h3>
        <p className="fecha"> {formatearFecha(publishedAt)} </p>
        <p className="resumen"> {contenido} </p>
        <Link className="enlace" to={`/posts/${url}`}>Leer entrada</Link>
    </div>


   </article>
  )
}
