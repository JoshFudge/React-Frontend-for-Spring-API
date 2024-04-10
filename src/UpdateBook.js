
import React, { useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const UpdateBook = () => {


    let isbn = useRef();
    let title = useRef();
    let authorid = useRef();
    let editionNumber = useRef();
    let copyRight = useRef();
    
    let HandleClick = async() => {

        let book = {
            isbn: isbn.current.value,
            title: title.current.value,
            editionNumber: editionNumber.current.value,
            copyRight: copyRight.current.value,
            authorid: authorid.current.value,
        }
    
        let url = 'http://localhost:8080/api/v1/books/'+ book.isbn + '?title=' + book.title + "&edition_number=" + book.editionNumber + "&copyright=" + book.copyRight + "&id=" + book.authorid;
    
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(author)
        })
        if(response.ok){
            alert('Book Updtated');
        } else {
            alert('Failed to Add Book');
        }
    
    }
    
    return(
        <div style={{backgroundColor: '#7EDADA'}} >
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6} style={{marginTop: '2rem'}}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Book ISBN</Form.Label>
                            <Form.Control type="text" placeholder="ISBN" ref={isbn}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" ref={title}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Add Another Author</Form.Label>
                            <Form.Control type="text" placeholder="New Author ID" ref={authorid}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edition Number</Form.Label>
                            <Form.Control type="text" placeholder="Edition Number" ref={editionNumber}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Copyright</Form.Label>
                            <Form.Control type="text" placeholder="Copyright" ref={copyRight}/>
                        </Form.Group>
                        <Button variant="primary" onClick={HandleClick}>Update Book</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
    )
    };

export default UpdateBook;