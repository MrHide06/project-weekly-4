import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Jumbotron fluid className="jumbroton">
                <Container className="containerJumbroton">
                    <h1 className="h1Jumbroton">Raja Ampat</h1>
                    <p className="pJumbroton">
                    Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                    berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}
