import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";



const CommentsModal = ({close, asin}) => {
    const [bookComments, setBooksComments] = useState(null);

    //funzione per chiamata api
    const getCommentsModal = async () => {
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
               headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNWFkZGI5YzBmNzAwMTQ0ODRmOTEiLCJpYXQiOjE2ODc4ODgxOTksImV4cCI6MTY4OTA5Nzc5OX0.yj5V-VpNK9K3g1Zxx3ltS_6zR8nJtNejhuU_c75DAnk'
               } 
            });
            const response = data.json();
            setBooksComments(response);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect (() => {
        getCommentsModal();
    },[]);

  
  
    return (
        <div
            className="modal show CommentModal"
            style={{ display: 'block' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Commenti</Modal.Title>
                </Modal.Header>

                <Modal.Body>
               
                                <Modal.Body>
                                <ListGroup className="d-flex justify-content-between align-items-start" as="ol" numbered>
                                    {bookComments &&
                                        bookComments.map((comment) => (
                                            
                                            <ListGroup.Item key={comment.asin}>
                                                <div className="ms-2 me-auto">
                                                    <div>{comment.comment}</div>
                                                    <div>Voto: {comment.rate}</div>
                                                    <div>Autore: {comment.author}</div>

                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                </ListGroup>
                            </Modal.Body>
                        
							
						
                </Modal.Body>




                <Modal.Footer>
                    <>
                    <Button onClick={close}>Close</Button>
                    {/* <AddComment asin={asin} getMethod={getCommentModal} /> */}
                    </>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
  )
}

export default CommentsModal