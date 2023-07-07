import React, { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../index.css";

import { getBooksContext } from "../context/GetBookProvider"; // context importato per chiamata api libri

import { ThemeContext } from "../context/ThemeProvider"; //importato il contesto tema

const NavBar = () => {
  const myBooks = useContext(getBooksContext);

  const navigate = useNavigate();

  const { theme, toggleTheme } = useContext(ThemeContext); // context tema
  console.log(theme);

  useEffect(() => {
    if (theme) {
      document.body.className = "dark-mode";
    } else {
      document.body.className = "light-mode";
    }
  }, [theme]);

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

  const redirectedHomepageClick = () => {
    navigate("/");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`${theme ? "bg-dark" : "bg-light"}`} // ternario per dare il tema dark/light
      data-bs-theme={`${theme ? "dark" : "light"}`}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home" onClick={redirectedHomepageClick}>
          Epic Books
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Contatti</Nav.Link>
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

            <Button
              onClick={toggleTheme}
              className="p-2 bg-warning mx-3 border-0"
            >
              Dark/light
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
