import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { getCommentContext } from "./CommentArea";

const RemoveComment = ({ commentId }) => {
  const { getCommentArea } = useContext(getCommentContext);

  const deleteComment = async () => {
    try {
      const data = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE4NTMyYTEyYjUwYzAwMTQ5ZTYzYWIiLCJpYXQiOjE2ODg3NTI5MzgsImV4cCI6MTY4OTk2MjUzOH0.KIc--BoTWm57t2JQ4BxZBRJMpo7AHUEwtS3wYrqcroM",
          },
        }
      );
      getCommentArea();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button className="btn btn-dark m-1" onClick={deleteComment}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </>
  );
};

export default RemoveComment;
