import React, { useState, useEffect, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import "./styleCommentArea.css";
import RemoveComment from "./RemoveComment";
import { SelectedContext } from "../../context/SelectedContext";
import SpinnerLoading from "../SpinnerLoading";
import AddComment from "./AddComment";

const CommentArea = (asin) => {
  const [bookComments, setBookComments] = useState(null);
  const [loading, setLoading] = useState(false);

  const { selected } = useContext(SelectedContext);
  console.log(selected);
  const getCommentArea = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${selected.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDljOWNiZjU3NTcxMTAwMTQ4Mjc3ZjEiLCJpYXQiOjE2ODc5ODUzNDMsImV4cCI6MTY4OTE5NDk0M30.6nVP8PJXxQ7oh9q1Jmh92Xu7N2tt90pCet4JdwJsK6Q",
          },
        }
      );

      const response = await data.json();
      setBookComments(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selected.asin) {
      getCommentArea();
    }
  }, [selected.asin]);

  return (
    <>
      <AddComment />

      {loading ? (
        <SpinnerLoading />
      ) : (
        <ListGroup
          className="d-flex justify-content-between align-items-center gap-3"
          as="ol"
          numbered
        >
          {bookComments &&
            bookComments.map((comment) => (
              <ListGroup.Item
                className="bg bg-body-secondary shadow "
                key={comment._id}
              >
                <div className="m-2 w-100 bg bg-body-secondary">
                  <div>{comment.comment}</div>
                  <div>Voto: {comment.rate}</div>
                  <div>Autore: {comment.author}</div>
                </div>
                <RemoveComment commentId={comment._id} />
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </>
  );
};

export default CommentArea;
