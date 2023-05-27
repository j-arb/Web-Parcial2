import Css from "./LangSelector.module.css";

function LangSelector(props) {

    return (
        <div className={Css.mainDiv}>
            <div className={`${Css.div} ${Css.bb}`} onClick={(e) => props.setLocale("es")}>
                <div className="p-2">es</div>
            </div>
            <div className={`${Css.div}`} onClick={(e) => props.setLocale("en")}>
                <div className="p-2">en</div>
            </div>
        </div>
    )
}

export default LangSelector