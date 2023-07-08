import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { nanoid } from "nanoid";
import SpinnerLoading from "./SpinnerLoading";
import CommentArea from "./Commenti/CommentArea";

import { ThemeContext } from "../context/ThemeProvider"; //importato il contesto tema

import { getBooksContext } from "../context/GetBookProvider";

const LatestRelease = () => {
  const { theme } = useContext(ThemeContext);
  const { arrayBook, isLoading } = useContext(getBooksContext);

  return (
    <>
      {isLoading && <SpinnerLoading />}
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
            <>
              <div className="text-center mb-5">
                <h2>Comment Area</h2>
                <span>Click the image of book for see the comments..</span>
              </div>
              <CommentArea />
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LatestRelease;
