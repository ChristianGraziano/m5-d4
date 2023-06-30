import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import './styleCommentModal.css'

//passo le props dell'asin e del tasto close
const CommentModal = ({ close, asin }) => {
    const [bookComments, setBookComments] = useState(null);
//funzione asincrona per la chiamata api
    const getCommentModal = async () => {
        
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDljOWNiZjU3NTcxMTAwMTQ4Mjc3ZjEiLCJpYXQiOjE2ODc5ODUzNDMsImV4cCI6MTY4OTE5NDk0M30.6nVP8PJXxQ7oh9q1Jmh92Xu7N2tt90pCet4JdwJsK6Q'
                }

             })
            const response = await data.json();
            setBookComments(response)
            } catch (error) {
            console.log(error);
            }
        }
    
        useEffect(() => {
            getCommentModal();
        }, []);


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
                            <ListGroup className="d-flex justify-content-between align-items-start" as="ol" numbered>
                                {bookComments &&
                                    bookComments.map((comment) => (
                                        <ListGroup.Item key={comment._id}>
                                            <div className="ms-2 me-auto">
                                            <div>{comment.comment}</div>
                                            <div>Voto: {comment.rate}</div>
                                            <div>Autore: {comment.author}</div>
                                            </div>
    
                                            {/* <DeleteComment getMethod={getCommentModal} asin={comment._id} />
                                            <ModificaComment getMethod={getCommentModal} comment={comment}  /> */}
                                        </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Modal.Body>
                  
                    <Modal.Footer>
                        <>
                        <Button onClick={close}>Close</Button>
                        {/* <AddComment asin={asin} getMethod={getCommentModal} /> */}
    
                        </>
                    </Modal.Footer>
    
                </Modal.Dialog>
            </div>
        );
    }
    
    export default CommentModal;
                   
                            
                                
                            
                 
    
    
    