import { useLoaderData } from "@remix-run/react";

import { getPosts } from "../models/post.server";

import ListadoPosts from "../components/listado-posts";

import style from "../style/blog.css";

export function meta() {
  return [
    {
      title: "GuitarLa-Blog",
      description: "guitarraLa-venta de guitarras",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();
  return (
    <main className="contenedor">
        <ListadoPosts
        
        posts={posts}
        />
    </main>
  );
};

export default Blog;
