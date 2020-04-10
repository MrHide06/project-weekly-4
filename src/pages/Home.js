import React from 'react'
import { Jumbotron, Container, Card, CardDeck, CardImg, Button } from 'react-bootstrap'
import photo1 from '../images/raja-ampat.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)

export default function Home() {
    return (
        <div>
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
            <div>
                <CardDeck className="cardDeck">
                    <Card className="card">
                        <CardImg variant="top" src={photo1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={photo1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={photo1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <div>
                <CardDeck className="cardDeck">
                    <Card className="card">
                        <CardImg variant="top" src={photo1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={photo1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text as={Link} to="/" className="linkediting" style={{textDecoration: 'none'}}>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={photo1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <div>
                <Container style={{textAlign: 'center'}}>
                    <p>Page 1 of 2 {'  '}
                        <Button variant="outline-dark" size="sm" className="buttonPage1">
                            Older Articles
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </Button>
                    </p>
                </Container>
            </div>
        </div>
    )
}
