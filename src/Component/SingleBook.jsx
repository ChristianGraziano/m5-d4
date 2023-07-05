import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentModal from "./Commenti/CommentModal";
import "./card.css";
const SingleBook = ({ img, asin, title, price, category }) => {
  const [modalVisible, setModalVisible] = useState(false);

  //funzione per il toggle della modale che verrà richiamata sul bottone
  const toggleCommentModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Card className="card-style">
        <Card.Img variant="top" className="img-card" src={img} />
        <Card.Body className="text-center d-flex flex-column justify-content-between">
          <Card.Title style={{ fontSize: "1.1rem" }}>{title}</Card.Title>
          <Card.Title style={{ fontSize: "1rem" }}>{price} €</Card.Title>
          <Card.Title>
            <em style={{ fontSize: ".8rem" }}>{category}</em>
          </Card.Title>
          <Card.Title style={{ fontSize: ".8rem" }}>asin: {asin}</Card.Title>

          <Button onClick={toggleCommentModal} variant="primary">
            Commenti
          </Button>
        </Card.Body>
      </Card>
      {modalVisible && <CommentModal asin={asin} close={toggleCommentModal} />}
    </>
  );
};

export default SingleBook;
