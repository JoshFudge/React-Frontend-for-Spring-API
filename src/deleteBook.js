
import {useRef } from "react";
const DeleteBook = () => {




    let isbn = useRef();
    
    let HandleClick = async() => {
        let wantedISBN = isbn.current.value;

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow",
        };

        try{
            let response = await fetch("http://localhost:8080/api/v1/books/"+wantedISBN,requestOptions)
            if (response.ok){
                alert("Book Deleted");
            }
        }
        catch (error) {
            console.log("HERE")
            console.error("Error:", error);
        }

    }

    return (
            <>
            <input type="text" id="authorid" name="isbn" placeholder="Book ISBN"ref={isbn} ></input>
                <button onClick={HandleClick}>Delete Book</button>
            </>
        );
    
};

export default DeleteBook;