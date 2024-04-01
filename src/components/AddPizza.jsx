import { useContext } from "react";
import { Button } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";
import { toast } from "react-toastify";
import { LuShoppingCart } from "react-icons/lu";


const AddPizza = ({ dataPizza }) => {
  const { pizzas, setPizzas, setTotal } = useContext(PizzaContext);


  const handleClick = () => {
    const index = pizzas.findIndex((p) => p.id === dataPizza.id);
    const pizzasCart = [...pizzas];
    if (typeof pizzasCart[index].cantidad !== "undefined") {
      pizzasCart[index].cantidad++;
    } else {
      pizzasCart[index].cantidad = 1;
    }
    setPizzas([...pizzasCart]);
    setTotal((prev) => prev + dataPizza.price);

    toast.success(`Pizza ${dataPizza.name} ha sido añadida al carrito.`);
  };

  return (
    <Button variant="dark" className="mx-2 mt-2" onClick={handleClick}>
      <LuShoppingCart style={{ color: '#F8D54A' }}/> Añadir
    </Button>
  );
};

export default AddPizza;
