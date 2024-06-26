import { useEffect, useRef, useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const IndividualBook = () => {

    const [isbn, setisbn] = useState();
    const [book, setBook] = useState([]);
    const [show, setShow] = useState(false);


    let wantedIsbn = useRef();
    
    let HandleClick = () => {
        setisbn(wantedIsbn.current.value);
    }
    
    
    useEffect( () => {
        if (wantedIsbn != null){
            async function getBook() {

                let myHeaders = new Headers();
                const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow",
                };
        
                try{
                    let response = await fetch("http://localhost:8080/api/v1/books/"+isbn,requestOptions)
                    let result = await response.json();
        
                    
                    if (response.ok){
                        let authorList = [];
                        result.authorList.forEach((author) => {
                            authorList.push(author.authorId);
                        });
                        result.authorList = authorList.join(", ");
                        setBook(result);
                        console.log(book);
                        setShow(true);
                    }
    
                }
                catch (error) {
                    console.log("HERE")
                    console.error("Error:", error);
                }
    
            }
            getBook();
            setisbn(null);
        }

    })

    console.log(book);

    if(show ){
        return (
            <>
            <div style={{backgroundColor: '#7EDADA'}}>
            <h1 style={{textAlign: 'center', fontFamily: 'cursive'}} >Individual Book</h1>
            <table>
            <thead>
                <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Copyright</th>
                <th>Edition Number</th>
                <th>Author IDs</th>
                </tr>
            </thead>
            <tbody>
                    <tr >
                    <td>{book.isbn}</td>
                        <td>{book.title}</td>
                        <td>{book.copyright}</td>
                        <td>{book.editionNumber}</td>
                        <td>{book.authorList}</td>
                    </tr>
            </tbody>
            <a style={{ fontFamily: 'cursive'}} href="/individualBook">Search for Another Book</a>
            </table>
            </div>

        </>
        );
    } else if(show ){
        return (
            <>
                <h1>No Book Matches this ISBN</h1>
            </>
        );
    }
    
    
    else{
        return (
            <div style={{backgroundColor: '#7EDADA'}}>
            <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6} style={{marginTop: '2rem'}}>
                    <>
                        <Form.Control type="text" id="isbn" name="isbn" placeholder="Book ISBN" ref={wantedIsbn} />
                        <Button variant="primary" onClick={HandleClick}>Search for Book</Button>
                    </>
                </Col>
            </Row>
        </Container>
        </div>
        );
    }


};

export default IndividualBook;