import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import SingleBook from './SingleBook';
import { nanoid } from 'nanoid';

const LatestRelease = ({arrayBook}) => {

  return (
      <Container className='my-5'>
        <Row >
            <Col  className='d-flex flex-wrap gap-3 justify-content-center'>
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