import { FormattedMessage } from "react-intl";
import BookCss from "./BookDetail.module.css";
import BookInfoField from "./BookInfoField";

function BookDetail(props) {
    console.log(props.book)
    return(
        <div className="table-responsive">
            <BookInfoField info={props.book.name} />
            <table className={`${BookCss.table} table`}>
                <tr>
                    <td><strong>ISBN</strong></td>
                    <td><BookInfoField info={props.book.isbn} /></td>
                </tr>
                <tr>
                    <td><strong><FormattedMessage id="Autor" /></strong></td>
                    <td><BookInfoField info={props.book.author} /></td>
                </tr>
                <tr>
                    <td><strong><FormattedMessage id="Editor" /></strong></td>
                    <td><BookInfoField info={props.book.publisher} /></td>
                </tr>
                <tr>
                    <td><strong><FormattedMessage id="Genero" /></strong></td>
                    <td><BookInfoField info={props.book.gender} /></td>
                </tr>
                <tr>
                    <td><strong><FormattedMessage id="Año"/></strong></td>
                    <td><BookInfoField info={props.book.year} /></td>
                </tr>
                <tr>
                    <td><strong><FormattedMessage id="Disponible en linea" /></strong></td>
                    <td><BookInfoField info={props.book.available_online? "Yes": "No"} /></td>
                </tr>
                <tr>
                    <td><strong><FormattedMessage id="Precio" /></strong></td>
                    <td><BookInfoField info={props.book.price} /></td>
                </tr>
                <tr>
                    <td><strong><FormattedMessage id="Resumen" /></strong></td>
                </tr>
            </table>
            <BookInfoField info={props.book.summary} p={props.book} textArea={true}/>
        </div>
    )    
}

export default BookDetail