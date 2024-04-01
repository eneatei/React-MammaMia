import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaContextProvider = ({ children }) => {
const [pizzas, setPizzas] = useState([]);
const [total, setTotal] = useState(0);

const url = "/pizzas.json";
const getDAta = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPizzas([...data])
}

useEffect(() => {
getDAta();
}, [])

  return (
    <PizzaContext.Provider value={{pizzas, setPizzas, total, setTotal}}>
        {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContextProvider;
