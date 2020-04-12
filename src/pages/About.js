import React from 'react'
import { Jumbotron, Container, Figure } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'

import Pesona from '../images/arti-pesona.jpg'


const About = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronAbout">
                    <Container>
                        <h1 className="h1Tag pt-5">About</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container>
                    <Figure>
                        <FigureImage
                            src={Pesona}
                            width={4000}
                            height={3000}
                        />
                    </Figure>
                </Container>
            </div>
        </div>
    )
}
export default About;
