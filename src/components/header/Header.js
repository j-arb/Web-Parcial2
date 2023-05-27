import { Container } from "react-bootstrap"
import HeaderCss from "./Header.module.css"
import React from "react";
import { FormattedMessage } from "react-intl";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let loClickHandler = (e) => {
            e.preventDefault();
            localStorage.removeItem("rol");
            this.props.setLogedin(false);
        }

        let logBut = (<a href="/login" className={HeaderCss.lib}><FormattedMessage id="Iniciar sesion"/></a>)
        if(this.props.logedin === true) {
            logBut = (<a className={HeaderCss.lib} onClick={loClickHandler}><FormattedMessage id="Cerrar sesion"/></a>)
        }

        return(
            <div className={HeaderCss.hDiv}>
                <Container>
                    <div className="d-flex justify-content-between">
                        <a className={HeaderCss.logo} href="/"><FormattedMessage id="Logo" /></a>
                        {logBut}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Header