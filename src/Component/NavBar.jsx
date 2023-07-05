import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { getBooksContext } from "../App"; // context importato
import { ThemeContext } from "../context/ThemeProvider";

const NavBar = () => {
  const myBooks = useContext(getBooksContext);
  const themeContext = useContext(ThemeContext);
  // const { theme, toggleTheme } = themeContext;
  console.log(themeContext);

  const { arrayBook, setArrayBook, getBookApi } = myBooks;

  const [searchTerm, setSearchTerm] = useState("");

  const SearchBook = (e) => {
    e.preventDefault();
    const filterBooks = arrayBook.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setArrayBook(filterBooks);
  };

  const handleResetSearchBar = (value) => {
    if (value === "") {
      getBookApi(); //x rilanciare funzione api se non ha valore
    } else {
      setSearchTerm(value); // qui che viene richiamato il value dell'input
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">Epic Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Contati</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="fw-bold">
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="pointer">
                Other..
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex" onSubmit={SearchBook}>
              <Form.Control
                type="text"
                placeholder="Search"
                onChange={(e) => handleResetSearchBar(e.target.value)}
              />

              <Button
                className="ms-2"
                type="submit"
                variant="outline-success bg-info"
              >
                Cerca
              </Button>
            </Form>

            <Button className="p-2 bg-warning mx-3 border-0">Dark/light</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
