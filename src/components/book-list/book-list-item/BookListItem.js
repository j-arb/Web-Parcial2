import { Card } from "react-bootstrap"
import BookListItemCss from "./BookListItem.module.css"

function BookListItem(props) {

    let bookClickHandler = (e) => {
        e.preventDefault();
        props.bookDSetter(props.book)
    }

    return(
        <Card className={BookListItemCss.card} bookId={props.book.id} onClick={bookClickHandler}>
            <Card.Img variant="top" src={props.book.image} className={BookListItemCss.img}/>
                <Card.Title className={BookListItemCss.title}>{props.book.name}</Card.Title>
                <Card.Text className={BookListItemCss.text}>
                    ISBN: {props.book.isbn}
                </Card.Text>
        </Card>
    )
}

export default BookListItem