import { Col, Container, Row } from "react-bootstrap"
import librosImg from "../../assets/libros.png"
import "./login.css"

function Login() {

    let buttonHandler = (e) => {
        
        e.preventDefault();

        let logInInfo = {
            email: document.getElementById("email").value,
            password: document.getElementById("pass").value
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(logInInfo.email))) {
            alert("Email invalido")
            return
        }

        if(logInInfo.password.length < 6) {
            alert("Contraseña invalida")
            return
        }

        // fetch('/', requestOptions)
        //     .then(response => response.json())
        //     .then(data => this.setState({ postId: data.id }));

    }

    return (
        <div className="bg-gray vh-100">
            <div className="vh-100 d-flex flex-column justify-content-center">
                <Container className="bg-white">
                    <Row>
                        <Col className="d-flex justify-content-center bg-blue">
                            <div>
                                <div className="d-flex justify-content-center">
                                    <img src={librosImg} style={{maxHeight: "200px"}} />
                                </div>
                                <p className="color-white text-center" style={{fontSize: "1.5em"}}>Encuentra hasta el libro que no estabas buscando</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="py-2">
                                <h1 className="text-center" style={{fontWeight: "400"}}>Tu Libreria Aliada</h1>
                                <form>
                                    <div className="d-flex flex-column">
                                        <label>Username or Email</label>
                                        <input id="email" type="text" className="form-control"></input>
                                        <label>Password</label>
                                        <input id="pass" type="text" className="form-control"></input>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn bg-gray mt-2 px-5 color-white" onClick={buttonHandler}>Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>  
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Login