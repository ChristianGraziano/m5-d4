import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentModal from "./Commenti/CommentModal";

const SingleBook = ({ img, asin, title, price, category }) => {
	
    const [modalVisible, setModalVisible] = useState(false);

    //funzione per il toggle della modale che verrà richiamata sul bottone
    const toggleCommentModal = () => {
        setModalVisible(!modalVisible);
    }

return (
		<>
			 <Card style={{ width: '15rem' }} >
                <Card.Img variant="top" className="h-75" src={img} />
                <Card.Body className="text-center">
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    <Card.Title>{asin}</Card.Title>
                   
                    
                    <Button onClick={toggleCommentModal} variant="primary">Commenti</Button>
                </Card.Body>
            </Card>
           {modalVisible && (
            <CommentModal asin={asin} close={toggleCommentModal} />
           )}
        
        </>
			
		
		);
	};

export default SingleBook;
