import react from "react";
import { Link } from "react-router-dom";
import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav >
                    <NavDropdown title="Authors" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/allAuthors">View All Authors</NavDropdown.Item>
                        <NavDropdown.Item href="/individualAuthor">View Individual Authors</NavDropdown.Item>
                        <NavDropdown.Item href="/addAuthor">Add an Author</NavDropdown.Item>
                        <NavDropdown.Item href="/updateAuthor">Edit an Author</NavDropdown.Item>
                        <NavDropdown.Item href="/deleteAuthor">Delete an Author</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Books" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/allBooks">View All Books</NavDropdown.Item>
                        <NavDropdown.Item href="/individualBook">View Individual Book</NavDropdown.Item>
                        <NavDropdown.Item href="/addBook">Add a Book</NavDropdown.Item>
                        <NavDropdown.Item href="/updateBook">Edit a Book</NavDropdown.Item>
                        <NavDropdown.Item href="/deleteBook">Delete a Book</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
        </Navbar>
    );
};

export default NewNavbar;