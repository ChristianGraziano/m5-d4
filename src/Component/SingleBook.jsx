import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
import { Link } from "react-router-dom";

import { SelectedContext } from "../context/SelectedContext";

const SingleBook = ({ img, asin, title, price, category }) => {
  const { selected, handleSelect } = useContext(SelectedContext);

  //funzione per il toggle della modale che verrà richiamata sul bottone
  const SelectionBook = () => {
    handleSelect(asin, title);
  };
  return (
    <Card className={`card-style shadow`}>
      <Card.Img
        onClick={SelectionBook}
        variant="top"
        className="img-card"
        src={img}
      />
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
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
