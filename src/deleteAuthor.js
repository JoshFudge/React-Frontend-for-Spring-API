
import {useRef } from "react";
const DeleteAuthor = () => {




    let id = useRef();
    
    let HandleClick = async() => {
        let wantedId = id.current.value;

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow",
        };

        try{
            let response = await fetch("http://localhost:8080/api/v1/authors/"+wantedId,requestOptions)
            if (response.ok){
                alert("Author Deleted");
            }else{
                alert("Could not find author to delete")
            }
        }
        catch (error) {
            console.log("HERE")
            console.error("Error:", error);
        }

    }

    return (
            <>
            <input type="text" id="authorid" name="authorid" placeholder="Author ID"ref={id} ></input>
                <button onClick={HandleClick}>Delete Author</button>
            </>
        );
    
};

export default DeleteAuthor;