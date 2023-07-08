import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SpinnerLoading from "./SpinnerLoading";

import NavBar from "./NavBar";
import Card from "react-bootstrap/Card";
const BookDetails = () => {
  const { asin } = useParams();

  const { data, loading, error } = useFetch(
    "https://epibooks.onrender.com/" + asin
  );
  const book = data[0];
  console.log(book);

  return (
    <>
      <NavBar />
      {loading ? (
        <SpinnerLoading />
      ) : (
        <div className="d-flex justify-content-center my-5">
          <Card style={{ width: "18rem" }}>
            {book && (
              <>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                </Card.Body>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default BookDetails;
