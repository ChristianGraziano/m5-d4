import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import NavBar from "./NavBar";
import Card from "react-bootstrap/Card";
const BookDetails = () => {
  const { asin } = useParams();

  const { data, loading, error } = useFetch(
    "https://epibooks.onrender.com/" + asin
  );
  console.log(data);
  const book = data[0];

  return (
    <>
      <NavBar />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BookDetails;
