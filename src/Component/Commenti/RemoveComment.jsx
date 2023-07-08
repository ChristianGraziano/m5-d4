import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const RemoveComment = ({ commentId }) => {
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button className="btn btn-dark m-1" onClick={deleteComment}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
};

export default RemoveComment;
