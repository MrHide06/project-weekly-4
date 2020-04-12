import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

import '../App.scss'

import Profile from './AuthorChild'

import MrHide from '../images/profile1.png'
import Dani from '../images/dani.jpg'
import Ravi from '../images/ravi.jpeg'


const AuthorArchive = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronAuthor darkenImage">
                    <Container>
                        <h1 className="h1Tag">AUTHOR ARCHIVE</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Profile
                                src = {MrHide}
                                text = 'Wahid Jamaalii As Shidqi'
                            />
                        </Col>
                        <Col>
                            <Profile
                                src = {Ravi}
                                text = 'Muhamad Khairavi Riansyah'
                            />
                        </Col>
                        <Col>
                            <Profile
                                src = {Dani}
                                text = 'Zakiy Almaulidani Ruwenda'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AuthorArchive;