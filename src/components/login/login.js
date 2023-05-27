import { Col, Container, Row } from "react-bootstrap"
import librosImg from "../../assets/libros.png"
import LoginCSS from "./Login.module.css"
import { Form, useNavigate } from "react-router-dom"
import { FormattedMessage, useIntl } from "react-intl";

function Login(props) {
    const navigate = useNavigate();
    const intl = useIntl();

    let buttonHandler = (e) => {
        
        e.preventDefault();

        let logInInfo = {
            email: document.getElementById("email").value,
            password: document.getElementById("pass").value
        }

        if (!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(logInInfo.email))) {
            alert(intl.formatMessage({id: "Email invalido"}))
            return
        }

        if(logInInfo.password.length < 6) {
            alert(intl.formatMessage({id: "Contraseña invalida"}))
            return
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(logInInfo)
        };

        fetch('http://localhost:3001/login', requestOptions)
            .then(response => response.json())
            .then(response => {
                localStorage.setItem("rol", response.rol)
                alert(intl.formatMessage({id: "Bienvenido"}) + ", " + response.rol);
                navigate("/")
                props.setLogedin(true)
            })
            .catch(err => {
                alert("Error iniciando sesión." + err);
            });

    }

    return (
        <div className={LoginCSS.mainDiv}>
            {/* <div className="h-100 d-flex flex-column justify-content-center"> */}
                <Container className="bg-white" style={{maxWidth: "800px"}}>
                    <Row>
                        <Col className="d-flex justify-content-center bg-blue p-5">
                            <div>
                                <div className="d-flex justify-content-center">
                                    <img src={librosImg} className="img-fluid" style={{maxHeight: "300px"}} />
                                </div>
                                <p className="color-white text-center" style={{fontSize: "1.5em"}}>
                                    <FormattedMessage id="Slogan1" />
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <form className="h-100">
                                <div className="p-5 h-100 d-flex flex-column justify-content-between">
                                    <h1 className="text-center" style={{fontWeight: "400"}}><FormattedMessage id="Slogan2"/></h1>
                                    <div>
                                        <label for="email" className={LoginCSS.label}><FormattedMessage id="Email"/></label>
                                        <input id="email" type="text" className={`form-control ${LoginCSS.input}`} />
                                        <label for="pass" className={`${LoginCSS.label} mt-3`}><FormattedMessage id="Contraseña"/></label>
                                        <input id="pass" type="password" className={`form-control ${LoginCSS.input}`} />
                                        <p className={`${LoginCSS.label} text-end`}><FormattedMessage id="Olvidar contraseña"/></p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button 
                                            className={`btn bg-gray mt-2 px-5 color-white ${LoginCSS.loginButton}`}
                                            onClick={buttonHandler}>
                                                <FormattedMessage id="Iniciar sesion"/>
                                        </button>
                                    </div>
                                </div>  
                            </form>
                        </Col>
                    </Row>
                </Container>
            {/* </div> */}
        </div>
    )
}

export default Login