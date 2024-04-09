import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useRef } from 'react';


const AddBook = () => {


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

    let url = 'http://localhost:8080/api/v1/books?isbn=' + book.isbn + '&title=' + book.title + "&editionNumber=" + book.editionNumber + "&copyright=" + book.copyRight + "&authorId=" + book.authorid;

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(author)
    })
    if(response.ok){
        alert('Book Added');
    } else {
        alert('Failed to Add Book');
    }

}

return(
    <div style={{backgroundColor: '#7EDADA'}} >
    <Container >
    <Row className="justify-content-center">
        <Col >
            <Form >
                <Form.Group style={{marginTop: '2rem'}}>
                    <Form.Label>Book ISBN</Form.Label>
                    <Form.Control type="text" placeholder="ISBN" ref={isbn}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" ref={title}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author ID</Form.Label>
                    <Form.Control type="text" placeholder="Author ID" ref={authorid}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Edition Number</Form.Label>
                    <Form.Control type="text" placeholder="Edition Number" ref={editionNumber}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Copy Right</Form.Label>
                    <Form.Control type="text" placeholder="Copy Right" ref={copyRight}/>
                </Form.Group>
                <Button variant="primary" onClick={HandleClick}>Add Book</Button>
            </Form>
        </Col>
    </Row>
</Container>
</div>
)
};
export default AddBook;