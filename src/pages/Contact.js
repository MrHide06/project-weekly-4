import React from 'react'
import { Jumbotron, Container, Col, Row } from 'react-bootstrap'
const Kontak = (props) => {
    return (
        <div class="post-content">
                            <iframe></iframe>
                            <h3 id="address">Address</h3>
                            <p>
                            Impact Byte<br/>
                            {props.nama}<br />
                            {props.lokasi}<br />
                            Email: <a href={`mailto:${props.email}`}>{props.email}</a>
                            </p>
                        </div>
    )
}
const Contact = () => {
    return (
        <div>

            <Jumbotron fluid className="jumbotron jContact darkenImage">
                <Container className="containerJumbroton">
                    <h1 className="h1Contact">Contact</h1>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Kontak nama={"Wahid Jamaalii As Shidqi"} lokasi={"Jakarta"} email={" wahid.091216@gmail.com "} />
                    </Col>
                    <Col>
                        <Kontak nama={"Muhamad Khairavi Riansyah"} lokasi={"Jakarta"} email={"mkhairavir@gmail.com"} />
                    </Col>
                    <Col>
                        <Kontak nama={"Zakiy Almaulidani Ruwenda"} lokasi={"Jakarta"} email={"zakiydani87@gmail.com"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;