import { useLoaderData } from '@remix-run/react'
import {getPost} from '../models/post.server'
import {formatearFecha } from '../utils/helpers'
import style from '../style/blog.css'
import { useOutletContext } from '@remix-run/react'


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: style
    },
 
  ]
}

export function meta({data}){
      

        if (!data) {
            return [
                {
                    title: `GuitarLa - Entrada no encontrada`,
                    description: `Guitarras, venta de guitarras, Entrada no encontrada`
                }
            ];
        }
 
     return [
      {
          title:`GuitarLa - ${data.data[0].attributes.Titulo}`,
          description:`Guitarras, entradas ${data.data[0].attributes.Titulo} `
      }
     ]
  
  
  }

export async function loader({params}){

    const {postUrl}=params
    const post=await  getPost(postUrl)
  
    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada No Encontrada'
        })

    }

    return post

}

// entradas
const Post = () => {
    const data =useOutletContext()
    console.log(data)


    const post=useLoaderData()
    const {Titulo,contenido,imagen,publishedAt}=post?.data[0]?.attributes

    return (
     
        <article className='contenedor post mt-3'>

            <img src={imagen?.data?.attributes?.url} alt={`Imagen blog ${Titulo}`} />

            <div className="contenido">
                <h3> {Titulo} </h3>
                <p className="fecha"> {formatearFecha(publishedAt)} </p>
                <p className="texto"> {contenido} </p>
             
</div>


        </article>


    )
  }
  
  export default Post
  
    