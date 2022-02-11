import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CategoriasAdd from "./CategoriasAdd";
import CategoriasList from "./CategoriasList";

const CategoriasApp = () => {
   const [categorias, setCategorias] = useState([]);
   const [search, setSearch] = useState("happy");

   const handleAgregar = () => {
      setCategorias([...categorias, "Risas"]);
   };

   const imgGif = async () => {
      const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=10&api_key=2MN7yT0MNbe14GVlpcAkCpvaOpBdIl0i`;
      const res = await fetch(url);
      const { data } = await res.json();

      const imgData = data.map((img) => {
         return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
         };
      });
      return imgData;
   };

   useEffect(() => {
      imgGif().then((imgData) => setCategorias(imgData));
   }, [search]);

   return (
      <div>
         <h1>Componentes con Hooks</h1>
         <CategoriasAdd setSearch={setSearch}/>
         <ol>
            <CategoriasList categorias={categorias} />
         </ol>
         <Button variant="primary" onClick={handleAgregar}>
            Agregar
         </Button>
      </div>
   );
};

export default CategoriasApp;
