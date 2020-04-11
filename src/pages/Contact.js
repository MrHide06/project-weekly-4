import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>

            <Jumbotron fluid className="jumbotron jContact">
                <Container className="containerJumbroton">
                    <h1 className="h1Contact">Contact</h1>
                    <p className="pContact">
                    Blog ini berisi tentang Kebudayaan, Hewan Epidemik, Tempat Wisata, Taman Nasional, dan Alat Musik
                    yang ada di INDONESIA
                    </p>
                </Container>
            </Jumbotron>
            
        </div>
    )
}

export default Contact;