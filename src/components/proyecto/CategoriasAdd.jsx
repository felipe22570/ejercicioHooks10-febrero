import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Form } from "react-bootstrap";

const CategoriasAdd = ({ setSearch }) => {
   const [palabra, setPalabra] = useState("");

   const handleInputChange = (e) => {
      setPalabra(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(palabra);
   };

   const searchref = useRef();

   useEffect(() => {
      searchref.current.focus()
   }, [])
   

   return (
      <div>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Busqueda</Form.Label>
               <Form.Control
                  ref={searchref}
                  type="text"
                  placeholder="Busqueda"
                  name="nombre"
                  value={palabra}
                  onChange={handleInputChange}
               />
            </Form.Group>
         </Form>
      </div>
   );
};

export default CategoriasAdd;
