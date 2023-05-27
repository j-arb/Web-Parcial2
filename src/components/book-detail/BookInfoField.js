import BookCss from "./BookDetail.module.css";

function BookInfoField(props) {
    if(localStorage.getItem("rol") === "Administrador") {
        if(props.textArea) {
            return(
                <textarea className="w-100" value={props.info} rows={5}></textarea>
            )
        }
        return(
            <input type="text" value={props.info} />
        )
    }

    return(
        <p className={BookCss.text}>{props.info}</p>
    )
}

export default BookInfoField