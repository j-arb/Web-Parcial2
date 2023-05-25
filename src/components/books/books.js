import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Books() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const URL = "http://127.0.0.1:3001/books";
        fetch(URL).then(data => data.json()).then(data => {
            setBooks(data)
        })
    }, []);

    return(
        <Container>
            <Row>
                <Col md="8">
                    <Row>
                    {
                        books.map((book) => {
                            return(
                                <Col className="my-2">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={book.image} />
                                        <Card.Body>
                                            <Card.Title>{book.name}</Card.Title>
                                            <Card.Text>
                                                ISBN: {book.isbn}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </Col>
                <Col>
                       <h1>{books[0].name}</h1> 
                       <p>ISBN: {books[0].isbn}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Books