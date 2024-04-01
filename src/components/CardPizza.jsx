import { Button, Card } from "react-bootstrap";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import AddPizza from "./AddPizza";
import IngredientesPizza from './IngredientesPizza';

const CardPizza = ({ dataPizza }) => {
const navigate = useNavigate()

const handleDetails = () => {
  navigate(`/${dataPizza.id}`)
}

  return (
    <Card className="border border-0 bg-body-tertiary rounded-5 rounded-bottom-0" style={{ width: '22rem' }}>
    <Card.Img variant="top" src={dataPizza.img} className="rounded-5 rounded-bottom-0" />
    <Card.Body>
      <Card.Title style={{ textTransform: 'uppercase' }}>{dataPizza.name}</Card.Title><hr />
      <IngredientesPizza ingredients={dataPizza.ingredients} />
      <Card.Footer className="border-2 bg-transparent mt-3">
        <Card.Title className="d-flex justify-content-center mt-2">${dataPizza.price.toLocaleString("es-CL")}</Card.Title>
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="outline-dark" className="mx-2 mt-2" onClick={handleDetails}><TbListDetails /> Detalles</Button>
          <AddPizza dataPizza={dataPizza} />
        </div>
      </Card.Footer>
    </Card.Body>
  </Card>
  );
};

export default CardPizza;