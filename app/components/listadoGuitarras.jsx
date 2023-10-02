import Guitarra from "./guitarra";

const ListadoGuitarras = ({guitarras}) => {
  return (
    <div>
      <h2 className="heading">Nuestra Coleccion</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => {
            return (
              <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListadoGuitarras;
