
import React, { useEffect, useState } from "react";
import './tableStyles.css';

const AllAuthors = () => {

    const [authors, setAuthors] = useState([]);

    useEffect( () => {

        async function getAuthors() {

            let myHeaders = new Headers();
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };
    
            try{
                let response = await fetch("http://localhost:8080/api/v1/authors",requestOptions)
                let result = await response.json();
    
                setAuthors(result);
            }
            catch (error) {
                console.error("Error:", error);
            }
    
            console.log(authors);
        }
        getAuthors();
    }, []);

    return(
        < >

            <div style={{backgroundColor: '#7EDADA'}}>
            <h1 style={{textAlign: 'center', fontFamily: 'cursive'}}>Authors</h1>
            <table>
            <thead>
                <tr>
                <th>Author ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author) => (

                    <tr >
                        <td>{author.authorId}</td>
                        <td>{author.firstName}</td>
                        <td>{author.lastname}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
        </>
    )


};

export default AllAuthors;