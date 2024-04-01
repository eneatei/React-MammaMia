import { useContext, useState } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";

const ShoppingCart = () => {
  const { pizzas, total, setPizzas } = useContext(PizzaContext);
  const [showModal, setShowModal] = useState(false);

  const handleQuantity = (id, increment) => {
    const updatedPizzas = pizzas.map((pizza) => {
      if (pizza.id === id) {
        const nuevaCantidad = pizza.cantidad + (increment ? 1 : -1);
        return { ...pizza, cantidad: nuevaCantidad };
      }
      return pizza;
    });
    setPizzas(updatedPizzas);
  };

  const handlePagar = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container style={{ marginTop: "150px" }}>
      <h4>Detalles del pedido</h4>
      {pizzas
        .filter((p) => typeof p.cantidad !== "undefined" && p.cantidad > 0).map((p) => {
          return (
            <Row key={p.id} className="justify-content-center align-items-center p">
              <Col xs={4} md={2} className="text-center">
                <img src={p.img} style={{ width: "100%" }} alt={p.name} />
              </Col>
              <Col xs={4} md={2} className="text-center" style={{ textTransform: 'uppercase' }}>
                <div>{p.name}</div>
              </Col>
              <Col xs={4} md={2} className="text-center">
                <div>{p.cantidad * p.price}</div>
              </Col>
              <Col xs={4} md={2} className="text-center">
                <Button variant="danger" onClick={() => handleQuantity(p.id, false)}>-</Button>
              </Col>
              <Col xs={4} md={2} className="text-center">
                <div>{p.cantidad}</div>
              </Col>
              <Col xs={4} md={2} className="text-center">
                <Button variant="primary" onClick={() => handleQuantity(p.id, true)}>+</Button>
              </Col>
            </Row>
          );
        })}
      <hr />
      <Row className="justify-content-between align-items-center">
        <Col xs={6} md={6} className="text-start">
          <h3>Total a pagar</h3>
        </Col>
        <Col xs={6} md={6} className="text-end">
          <h2>{total}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Button variant="success" onClick={handlePagar}>Pagar</Button>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>¡Compra realizada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Su compra ha sido realizada. ¡Gracias por su pedido!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ShoppingCart;
