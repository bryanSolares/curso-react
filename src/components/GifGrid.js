import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);
  //   useEffect(() => {
  //     getGifs(category).then(setImages);
  //   }, [category]); // esto se implemento porque cada vez que el componente cambiaba se necesitaba recargar, se traslada a custome hook

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>

      {loading && <p className="animate__animated animate__flash">Cargando...</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
