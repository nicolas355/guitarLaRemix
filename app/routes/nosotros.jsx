import imagen from '../../public/img/nosotros.jpg'
import style from '../style/nosotros.css'


export function meta(){
    return [
        {
            title:'GuitarLA - Nosotros',
            description:'venta de guitarras'
        }

    ]
    
}

export function links() {
    return [
      {
        rel: 'stylesheet',
        href: style
      },
      {
        rel: 'preload',
        href: imagen,
        as: 'image'
      }
    ]
  }
  

const Nosotros = () => {





  return (
    <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros"/>

                <div>
                    <p>Etiam accumsan est et feugiat dictum. Praesent urna purus, finibus vitae maximus id, gravida a erat. Vivamus aliquet dapibus odio id tincidunt. Quisque commodo lacinia lorem, nec suscipit ligula mollis nec. In pulvinar purus maximus elit sodales feugiat. Sed id turpis risus. Suspendisse neque tortor, tincidunt porttitor risus non, ultrices vehicula eros.</p>

                    <p>Etiam accumsan est et feugiat dictum. Praesent urna purus, finibus vitae maximus id, gravida a erat. Vivamus aliquet dapibus odio id tincidunt. Quisque commodo lacinia lorem, nec suscipit ligula mollis nec. In pulvinar purus maximus elit sodales feugiat. Sed id turpis risus. Suspendisse neque tortor, tincidunt porttitor risus non, ultrices vehicula eros.</p>
                </div>
            </div>
        </main>
  )
}

export default Nosotros
