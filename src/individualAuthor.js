import { useEffect, useRef, useState } from "react";


const IndividualAuthor = () => {

    const [authorid, setAuthorid] = useState();
    const [author, setAuthor] = useState([]);
    const [show, setShow] = useState(false);


    let id = useRef();
    
    let HandleClick = () => {
        setAuthorid(id.current.value);
    }
    
    
    useEffect( () => {
        if (authorid != null){
            async function getAuthor() {

                let myHeaders = new Headers();
                const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow",
                };
        
                try{
                    let response = await fetch("http://localhost:8080/api/v1/authors/"+authorid,requestOptions)
                    let result = await response.json();
        
                    
                    if (response.ok){
                        setAuthor(result);
                        console.log(author);
                        setShow(true);
                    }
    
                }
                catch (error) {
                    console.log("HERE")
                    console.error("Error:", error);
                }
    
            }
            getAuthor();
            setAuthorid(null);
        }

    })

    console.log(author);

    if(show ){
        return (
            <>
    
            <h1>Authors</h1>
            <thead>
                <tr>
                <th>Author ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                    <tr >
                        <td>{author.authorId}</td>
                        <td>{author.firstName}</td>
                        <td>{author.lastname}</td>
                    </tr>
            </tbody>
            <a href="/individualAuthor">Search for Another Author</a>
        </>
        );
    } else if(show ){
        return (
            <>
                <h1>No Author Matches this ID</h1>
            </>
        );
    }
    
    
    else{
        return (
            <>
            <input type="text" id="authorid" name="authorid" placeholder="Author ID"ref={id} ></input>
                <button onClick={HandleClick}>Search for Author</button>
            </>
        );
    }


};

export default IndividualAuthor;