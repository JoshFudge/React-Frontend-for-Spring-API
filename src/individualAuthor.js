import { useEffect, useRef, useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


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
                    <tr >
                        <td>{author.authorId}</td>
                        <td>{author.firstName}</td>
                        <td>{author.lastname}</td>
                    </tr>
            </tbody>
            <a style={{ fontFamily: 'cursive'}} href="/individualAuthor">Search for Another Author</a>
            </table>
            </div>
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
            <div style={{backgroundColor: '#7EDADA'}}> 
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6} style={{marginTop: '2rem'}}>
                    <Form.Control type="text" id="authorid" name="authorid" placeholder="Author ID" ref={id} />
                    <Button variant="primary" onClick={HandleClick}>Search for Author</Button>
                </Col>
            </Row>
        </Container>
        </div>
            </>
        );
    }


};

export default IndividualAuthor;