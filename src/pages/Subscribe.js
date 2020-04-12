import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCheck);
 const Subrek = (props) => {

     return (
        <div>
            <div className="single-price">
                <div className="price-head">
                    <h2>{props.judul}</h2>
                    <p><span className="dollar">$</span><span className="value">{props.harga}</span><span className="waktu">{props.waktu}</span></p>
                </div>
                <div className="price-content">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} className="fontIcon" color="#30dbdd" /> Lorem Ipsum</li>
                        <li><FontAwesomeIcon icon={faCheck} className="fontIcon" color="#30dbdd" /> Lorem Ipsum</li>
                        <li><FontAwesomeIcon icon={faCheck} className="fontIcon" color="#30dbdd"/> Lorem Ipsum</li>
                        <li><FontAwesomeIcon icon={faCheck} className="fontIcon" color="#30dbdd"/> Lorem Ipsum</li>
                    </ul>
                </div>
                <div className="price-bottom">
                    <a href="#" className="buy-btn" >
                        Subrek
                    </a>
                </div>
            </div>
        </div>

     )

}

const Subscribe = () => {
    return (

        <div>
            <Jumbotron fluid className="jSubs darkenImage">
                <Container className="containerJumbroton">
                    <h1 className="h1Subs">Subscribe</h1>
                    <p className="pSubs">
                    Berlangganan untuk mendapatkan fitur lebih dari layanan yang kami sediakan
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Subrek judul={"Gratis"} harga={"0"} waktu={"Selamanya"} />
                    </Col>
                    <Col>
                        <Subrek judul={"Bulanan"} harga={"50k"} waktu={"/Bulan"} />
                    </Col>
                    <Col>
                        <Subrek judul={"Tahunan"} harga={"500k"} waktu={"/Tahun"} />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}



export default Subscribe;