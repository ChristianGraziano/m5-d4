import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { nanoid } from "nanoid";

import { ThemeContext } from "../context/ThemeProvider"; //importato il contesto tema

const LatestRelease = ({ arrayBook }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container className="my-5">
      <Row>
        <Col
          style={{ maxHeight: "1000px" }}
          lg={8}
          md={8}
          sm={6}
          xs={6}
          className="d-flex flex-wrap gap-3 justify-content-center overflow-auto"
        >
          {arrayBook &&
            arrayBook.map((book) => {
              return (
                <SingleBook
                  key={nanoid()}
                  img={book.img}
                  asin={book.asin}
                  category={book.category}
                  price={book.price}
                  title={book.title}
                />
              );
            })}
        </Col>
        <Col className={`${theme ? "text-white" : "text-black"}`}>
          <div className="text-center">
            <h3>Comment area</h3>
            <span className=" text-center">
              click the book to see the comments
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LatestRelease;
