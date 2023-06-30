import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';





const NavBar = ({arrayBook, setArrayBook, getBookApi}) => {
  
  const [searchTerm, setSearchTerm] = useState("");

	const filterBooks = (e) => {
		e.preventDefault();

		const filterBooks = arrayBook.filter((book) =>
			book.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setArrayBook(filterBooks);
	};

	const handleResetSearchBar = (value) => {
		if (value === "") {
			getBookApi();
		}

		setSearchTerm(value);
  
}
    



  
  return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Features</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={filterBooks} >

              <Form.Control 
                onChange={handleResetSearchBar}
                type="text"
                placeholder="Search"
              />
            
              <Button className='ms-2' type='submit' variant="outline-success bg-info" >Cerca</Button>
            </Form>

            </Container>
        </Navbar>

        
  );
}

export default NavBar