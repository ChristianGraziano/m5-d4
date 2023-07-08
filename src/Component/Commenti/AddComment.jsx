import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";

import { SelectedContext } from "../../context/SelectedContext";

const AddComment = () => {
  const mySelection = useContext(SelectedContext);
  const { selected } = mySelection;

  const [review, setReview] = useState("");
  const [rate, setRate] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postComment = async () => {
    try {
      const payload = {
        comment: review,
        rate: rate,
        elementId: selected.asin,
      };
      const data = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDljOWNiZjU3NTcxMTAwMTQ4Mjc3ZjEiLCJpYXQiOjE2ODc5ODUzNDMsImV4cCI6MTY4OTE5NDk0M30.6nVP8PJXxQ7oh9q1Jmh92Xu7N2tt90pCet4JdwJsK6Q",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const sendReview = (e) => {
    e.preventDefault();

    if (review && rate) {
      postComment();
    } else {
      alert("riempire tutti i campi");
    }
  };

  return (
    <>
      <Button
        variant="btn btn-warning my-2"
        onClick={handleShow}
        className={`${selected.asin !== "vuoto" ? "" : "d-none"}`}
      >
        <FontAwesomeIcon icon={faPlus} /> add review
      </Button>
      <Modal show={show} onHide={handleClose} centered keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add new comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              onChange={(e) => setReview(e.target.value)}
            >
              <Form.Label>Review</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              onChange={(e) => setRate(e.target.value)}
            >
              <Form.Label>Rate</Form.Label>
              <Form.Control type="number" min="1" max="5" placeholder="1 - 5" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" onClick={sendReview}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddComment;
