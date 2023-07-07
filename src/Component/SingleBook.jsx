import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentModal from "./Commenti/CommentModal";
import "./card.css";
import { Link } from "react-router-dom";

const SingleBook = ({ img, asin, title, price, category }) => {
  const [modalVisible, setModalVisible] = useState(false);

  //funzione per il toggle della modale che verrà richiamata sul bottone
  const toggleCommentModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Card className="card-style shadow">
        <Card.Img variant="top" className="img-card" src={img} />
        <Card.Body className="text-center d-flex flex-column justify-content-between">
          <Card.Title className="title-card">{title}</Card.Title>
          <Card.Title style={{ fontSize: "1rem" }}>{price} €</Card.Title>
          <Card.Title>
            <em style={{ fontSize: ".8rem" }}>{category}</em>
          </Card.Title>
          <Card.Title style={{ fontSize: ".8rem" }}>asin: {asin}</Card.Title>
          <Link to={`/book/${asin}`}>
            <Button>Details</Button>
          </Link>
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
