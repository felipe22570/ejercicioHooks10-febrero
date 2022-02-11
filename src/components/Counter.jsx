import { Button } from "react-bootstrap";
import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
   const { counter, handleAdd, handleReset, handleSustract } = useCounter(80);

   return (
      <div>
         <h1>Counter: {counter}</h1>
         <Button variant="primary" onClick={handleAdd}>
            Sumar
         </Button>
         <Button variant="primary" onClick={handleSustract}>
            Restar
         </Button>
         <Button variant="primary" onClick={handleReset}>
            Reset
         </Button>
      </div>
   );
};

export default Counter;
