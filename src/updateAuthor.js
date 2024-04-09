
import React, { useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const UpdateAuthor = () => {


    let firstName = useRef();
    let lastName = useRef();
    let id = useRef();
    
    let HandleClick = async() => {
    
        console.log(firstName.current.value);
        console.log(lastName.current.value);
    
        let author = {
            authorId: id.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value
        }
    
        console.log(author);
    
        let url = 'http://localhost:8080/api/v1/authors/'+author.authorId+'?firstName=' + author.firstName + '&lastName=' + author.lastName;
    
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(author)
        })
        if(response.ok){
            alert('Author Updated');
        } else {
            alert('Failed to Add Author');
        }
    
    }
    
    return(
        <div style={{backgroundColor: '#7EDADA'}} >
        <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={6} style={{marginTop: '2rem'}}>
                <Form>
                    <Form.Group>
                        <Form.Label>Author ID</Form.Label>
                        <Form.Control type="text" placeholder="Author ID" ref={id}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" ref={firstName}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" ref={lastName}/>
                    </Form.Group>
                    <Button variant="primary" onClick={HandleClick}>Update Author</Button>
                </Form>
            </Col>
        </Row>
    </Container>
    </div>
    )
    };

export default UpdateAuthor;