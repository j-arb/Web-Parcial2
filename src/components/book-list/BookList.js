import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BookListItem from "./book-list-item/BookListItem";
import BookDetail from "../book-detail/BookDetail";

function BookList() {
    const [books, setBooks] = useState([]);
    const [bookD, setBookD] = useState([]);

    let bookDSetter = (book) => {
        let bookId = book.id
        const URL = "http://127.0.0.1:3001/books/" + bookId;
        fetch(URL).then(data => data.json()).then(data => {
            setBookD(data)
        }).catch(err => alert(err));
    }

    useEffect(()=>{
        const URL = "http://127.0.0.1:3001/books";
        fetch(URL).then(data => data.json()).then(data => {
            setBooks(data)
            return data
        }).then(data => {
            bookDSetter(data[0]);
        }).catch(err => alert(err))
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
                                    <BookListItem book={book} bookDSetter={bookDSetter}/>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </Col>
                <Col>
                       <BookDetail book={bookD} />
                </Col>
            </Row>
        </Container>
    )
}

export default BookList