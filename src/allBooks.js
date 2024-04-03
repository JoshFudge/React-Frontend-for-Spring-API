import React, { useEffect, useState } from "react";
import './tableStyles.css';

const AllBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect( () => {

        async function getBooks() {

            let myHeaders = new Headers();
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };
    
            try{
                let response = await fetch("http://localhost:8080/api/v1/books",requestOptions)
                let result = await response.json();
                let newResult = result.map((book) => {
                    let authorList = [];
                    book.authorList.forEach((author) => {
                        authorList.push(author.authorId);
                    });
                    book.authorList = authorList.join(", ");
                    return book;
                })
                setBooks(newResult);
            }
            catch (error) {
                console.error("Error:", error);
            }
    
            console.log(books);
        }
        getBooks();
    }, []);

    return(
        <>

            <h1>Books</h1>
            <thead>
                <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Copyright</th>
                <th>Edition Number</th>
                <th>Author IDs</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    // console.log(book.authorList),
                    <tr >
                        <td>{book.isbn}</td>
                        <td>{book.title}</td>
                        <td>{book.copyright}</td>
                        <td>{book.editionNumber}</td>
                        <td>{book.authorList}</td>

                    </tr>
                ))}
            </tbody>
        </>
    )


};

export default AllBooks;