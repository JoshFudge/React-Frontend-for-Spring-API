import { useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const AddAuthor = () => {


let firstName = useRef();
let lastName = useRef();

let HandleClick = async() => {

    console.log(firstName.current.value);
    console.log(lastName.current.value);

    let author = {
        firstName: firstName.current.value,
        lastName: lastName.current.value
    }

    console.log(author);

    let url = 'http://localhost:8080/api/v1/authors?firstName=' + author.firstName + '&lastName=' + author.lastName;

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(author)
    })
    let res = await response.json();
    if(res.ok){
        alert('Author Added');
    } else {
        alert('Failed to Add Author');
    }

}

return(
    <Container>
    <Row className="justify-content-center">
        <Col xs={12} md={6}>
            <Form>
                <Form.Group>
                    <Form.Label>Author First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" ref={firstName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" ref={lastName}/>
                </Form.Group>
                <Button variant="primary" onClick={HandleClick}>Add Author</Button>
            </Form>
        </Col>
    </Row>
</Container>
)
};
export default AddAuthor;