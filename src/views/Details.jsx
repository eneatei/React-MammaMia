import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import AddPizza from "../components/AddPizza.jsx";
import IngredientesPizza from "../components/IngredientesPizza.jsx";

const Details = () => {
  const { pizzas } = useContext(PizzaContext);
  const { id } = useParams();

  const index = pizzas.findIndex((p) => p.id === id);
  const pizzaDetalle = pizzas[index];

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "150px"}}>
      <div className="card col-11 col-md-10 mb-3 " style={{ marginTop: "20px" }}>
        <div className="row g-0">
          <div className="col-12 col-md-4 fill rounded-1" style={{ backgroundImage: `url(${pizzaDetalle.img})` }}>
            <AddPizza dataPizza={pizzaDetalle} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 style={{ textTransform: 'uppercase' }}>{pizzaDetalle.name}</h5>
              <hr />
              <p>{pizzaDetalle.desc}</p>
              <IngredientesPizza ingredients={pizzaDetalle.ingredients} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p className="fs-3 fw-semibold">Precio $ {pizzaDetalle.price.toLocaleString("es-CL")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
