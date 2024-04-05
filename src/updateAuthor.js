
import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        let res = await response.json();
        if(res.ok){
            alert('Author Added');
        } else {
            alert('Failed to Add Author');
        }
    
    }
    
    return(
        <Form>
            <Form.Group>
                <Form.Label>Author ID</Form.Label>
                <Form.Control type="text" placeholder="First Name" ref={id}/>
                </Form.Group>
            <Form.Group>
                <Form.Label>Author First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" ref={firstName}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Author Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" ref={lastName}/>
            </Form.Group>
            <Button onClick={HandleClick}>Update Author</Button>
        </Form>
    )
    };

export default UpdateAuthor;