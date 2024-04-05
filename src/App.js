import logo from './logo.svg';
import './App.css';
import Homepage from './homepage.js';
import NewNavbar from './navbar.js';
import AllAuthors from './allAuthors.js';
import AllBooks from './allBooks.js';
import IndividualAuthor from './individualAuthor.js';
import IndividualBook from './individualbook.js';
import DeleteAuthor from './deleteAuthor.js'; 
import DeleteBook from './deleteBook.js';
import AddAuthor from './addAuthor.js';
import AddBook from './addBook.js';
import UpdateAuthor from './updateAuthor.js';
import UpdateBook from './UpdateBook.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <NewNavbar />
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/allAuthors" element={<AllAuthors />} />
    <Route path="/allBooks" element={<AllBooks />} />
    <Route path="/individualAuthor" element={<IndividualAuthor></IndividualAuthor>} />
    <Route path="/individualBook" element={<IndividualBook></IndividualBook>} />
    <Route path="deleteAuthor" element={<DeleteAuthor></DeleteAuthor>} />
    <Route path="deleteBook" element={<DeleteBook></DeleteBook>} />
    <Route path="addAuthor" element={<AddAuthor></AddAuthor>} />
    <Route path="addBook" element={<AddBook></AddBook>} />
    <Route path="updateAuthor" element={<UpdateAuthor></UpdateAuthor>} />
    <Route path="updateBook" element={<UpdateBook></UpdateBook>} />

    </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
