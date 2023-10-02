import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import { getCurso } from "../models/curso.server";
import { getPosts } from "../models/post.server";
import ListadoGuitarras from "../components/listadoGuitarras";
import ListadoPosts from "../components/listado-posts";
import Curso from "../components/curso";
import stylePosts from '../style/blog.css'

import styleCurso from '../style/curso.css'

import style from '../style/guitarra.css'

export function links() {
    return [
      {
        rel: 'stylesheet',
        href: style
      },

      {
        rel: 'stylesheet',
        href: stylePosts
      },

      {
        rel: 'stylesheet',
        href: styleCurso
      },
   
    ]
  }

export function meta() {}

export async function loader() {
  const [guitarras, posts,curso] = await Promise.all([getGuitarras(), getPosts(),getCurso()]);



  /* forma lenta
    const guitarras=await getGuitarras()
  
    const posts =await getPosts() */

  return { guitarras:guitarras.data, posts:posts.data ,curso:curso.data};
}

const Index = () => {
  const { guitarras, posts,curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">


        <ListadoGuitarras
        
        guitarras={guitarras}
        
        />
      </main>

      <Curso
        curso={curso.attributes}
      />

      <section className="contenedor">
    <ListadoPosts
        posts={posts}
    />
      </section>



    </>
  );
};

export default Index;
