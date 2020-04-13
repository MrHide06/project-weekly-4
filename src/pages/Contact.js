import React from 'react'
import { Jumbotron, Container, Col, Row } from 'react-bootstrap'
import Map from './Map'
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
        <Map />
        </div>
    )
}

export default Contact;