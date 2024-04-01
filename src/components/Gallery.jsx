import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import CardPizza from "./CardPizza";
import { Container } from "react-bootstrap";

const Gallery = () => {
const { pizzas } = useContext(PizzaContext);

  return (
    <Container className="d-flex flex-wrap justify-content-around pt-4 pb-5 gap-4">
{pizzas.map((p) => {
  return <CardPizza key={p.id} dataPizza={p}></CardPizza>
})
}
    </Container>
  )
}

export default Gallery