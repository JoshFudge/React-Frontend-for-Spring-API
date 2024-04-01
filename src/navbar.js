import react from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div class="navbar">
            <a href="/">Home</a>


        <div class="dropdown">
            <button class="dropbtn">Authors
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <a href="/allAuthors">View All Authors</a>
            <a href="/individualAuthor">View Individual Authors</a>
            <a href="/addAuthor">Add an Author</a>
            <a href="/updateAuthor">Edit an Author</a>
            <a href="/deleteAuthor">Delete an Author</a>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Books
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <a href="/allBooks">View All Books</a>
            <a href="/individualBook">View Individual Book</a>
            <a href="/addBook">Add a Book</a>
            <a href="/updateBook">Edit a Book</a>
            <a href="/deleteBook">Delete an Book</a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;