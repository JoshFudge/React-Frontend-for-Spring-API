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
    
                setBooks(result);
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

            <h1>Authors</h1>
            <thead>
                <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Copyright</th>
                <th>Edition Number</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (

                    <tr >
                        <td>{book.isbn}</td>
                        <td>{book.title}</td>
                        <td>{book.copyright}</td>
                        <td>{book.editionNumber}</td>
                    </tr>
                ))}
            </tbody>
        </>
    )


};

export default AllBooks;