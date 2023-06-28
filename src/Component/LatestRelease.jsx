import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import SingleBook from './SingleBook';
import { nanoid } from 'nanoid';

const LatestRelease = () => {

    const [arrayBook, setArrayBook]= useState([]);
    console.log(setArrayBook);
    
    const getBookApi= async () => {
        try {
            const data = await fetch('https://epibooks.onrender.com/');
            const response = data.json();
            setArrayBook(response);
        } catch (error) {
        }
    }

    useEffect(() => {
		getBookApi();
	}, []);


  return (
    <Container>
        <Row>
            <Col>
                {arrayBook && arrayBook.map((book) => {
                    return(
                        <SingleBook
                            key={nanoid}
                            img={book.img}
                            asin={book.asin}
                            category={book.category}
                            price={book.price}
                            title={book.title}
                        
                        />
                    )
                })};
            </Col>
        </Row>
    </Container>
  );
}

export default LatestRelease;