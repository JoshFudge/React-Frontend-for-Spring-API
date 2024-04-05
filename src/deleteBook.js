
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
            if (wantedISBN == ''){
                alert("Please enter an ISBN")
            }else{
                let response = await fetch("http://localhost:8080/api/v1/books/"+wantedISBN,requestOptions)
                if (response.ok){
                    alert("Book Deleted");
                }else{
                    alert("Could not find book to delete")
                }
            }

        }
        catch (error) {
            console.log("HERE")
            console.error("Error:", error);
        }

    }

    return (
        <>
        <input type="text"  placeholder="Book ISBN"ref={isbn} ></input>
        <button onClick={HandleClick}>Delete Book</button>
        </>
        );
    
};

export default DeleteBook;