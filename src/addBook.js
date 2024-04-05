import Form from 'react-bootstrap/Form';
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
    let res = await response.json();
    if(res.ok){
        alert('Book Added');
    } else {
        alert('Failed to Add Book');
    }

}

return(
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
        <button onClick={HandleClick}>Add Book</button>
    </Form>
)
};
export default AddBook;