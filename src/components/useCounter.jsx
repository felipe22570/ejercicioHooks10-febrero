import { useState } from "react";

const useCounter = (value = 10) => {
   const [counter, setCounter] = useState(value);

   const handleAdd = () => {
      setCounter(counter + 1);
   };

   const handleSustract = () => {
      setCounter(counter - 1);
   };

   const handleReset = () => {
      setCounter(value);
   };

   return { counter, handleAdd, handleReset, handleSustract };
};

export default useCounter;
