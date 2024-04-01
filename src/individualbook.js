import { useEffect, useRef, useState } from "react";


const IndividualBook = () => {

    const [isbn, setisbn] = useState();
    const [book, setBook] = useState([]);
    const [show, setShow] = useState(false);


    let wantedIsbn = useRef();
    
    let HandleClick = () => {
        setisbn(wantedIsbn.current.value);
    }
    
    
    useEffect( () => {
        if (wantedIsbn != null){
            async function getBook() {

                let myHeaders = new Headers();
                const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow",
                };
        
                try{
                    let response = await fetch("http://localhost:8080/api/v1/books/"+isbn,requestOptions)
                    let result = await response.json();
        
                    
                    if (response.ok){
                        setBook(result);
                        console.log(book);
                        setShow(true);
                    }
    
                }
                catch (error) {
                    console.log("HERE")
                    console.error("Error:", error);
                }
    
            }
            getBook();
            setisbn(null);
        }

    })

    console.log(book);

    if(show ){
        return (
            <>
    
            <h1>Individual Book</h1>
            <thead>
                <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Copyright</th>
                <th>Edition Number</th>
                </tr>
            </thead>
            <tbody>
                    <tr >
                    <td>{book.isbn}</td>
                        <td>{book.title}</td>
                        <td>{book.copyright}</td>
                        <td>{book.editionNumber}</td>
                    </tr>
            </tbody>
            <a href="/individualBook">Search for Another Book</a>
        </>
        );
    } else if(show ){
        return (
            <>
                <h1>No Book Matches this ISBN</h1>
            </>
        );
    }
    
    
    else{
        return (
            <>
            <input type="text" id="isbn" name="isbn" placeholder="Book ISBN"ref={wantedIsbn} ></input>
                <button onClick={HandleClick}>Search for Book</button>
            </>
        );
    }


};

export default IndividualBook;