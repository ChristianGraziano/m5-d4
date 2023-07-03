import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function SpinnerLoading() {
  return (
    

    <Container>
      <Row>
        <Col className='text-center my-5' >
        <Spinner animation="grow" variant="dark" />
        </Col>
      </Row>
    </Container>
        
  );
}

export default SpinnerLoading;