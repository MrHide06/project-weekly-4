import React from 'react'
import '../../App.scss'
import { Jumbotron, Container, Button, Media, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import profile from '../../images/profile2.png'

library.add(faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faMapMarkerAlt)
const Gamelan = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonGamelan">
                    <Container className="containerGamelan">
                        <h1 className="h1Gamelan">Gamelan</h1>
                        <p className="pGamelan">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerGame">
                <p>Gamelan adalah musik ansambel tradisional Jawa, Sunda, dan Bali di Indonesia 
                yang memiliki tangga nada pentatonis dalam sistem tangga nada (laras) slendro dan pelog. 
                Terdiri dari instrumen musik perkusi yang digunakan pada seni musik karawitan. 
                Instrumen yang paling umum digunakan adalah metalofon antara lain gangsa, gender, bonang, 
                gong, saron, slenthem dimainkan oleh wiyaga menggunakan palu (pemukul) dan membranofon berupa 
                kendhang yang dimainkan dengan tangan. Juga idiofon berupa kemanak dan metalofon lain adalah 
                beberapa di antara instrumen gamelan yang umum digunakan. Instrumen lain termasuk xilofon 
                berupa gambang, aerofon berupa seruling, kordofon berupa rebab, dan kelompok vokal disebut 
                sindhen
                </p>
                <p>
                Seperangkat gamelan dikelompokkan menjadi dua, yakni gangsa pakurmatan dan gangsa ageng. 
                Gangsa pakurmatan dimainkan untuk mengiringi hajad dalem (upacara adat karaton), jumenengan 
                (upacara penobatan raja atau ratu), tingalan dalem (peringatan kenaikan takhta raja atau ratu), 
                garebeg (upacara peristiwa penting), sekaten (upacara peringatan hari lahir Nabi Muhammad). 
                Gangsa ageng dimainkan sebagai pengiring pergelaran seni budaya umumnya dipakai untuk mengiringi 
                beksan (seni tari), wayang (seni pertunjukan), uyon-uyon (upacara adat/hajatan), dan lain-lain. 
                Saat ini, gamelan banyak digunakan di pulau Jawa, Madura, Bali, dan Lombok.
                </p>
                <p style={{textAlign: 'center'}}>
                    <h6>Share this Articles</h6>
                    <Button variant="primary">
                        <FontAwesomeIcon icon={faFacebookF} /> Facebook
                    </Button>{' '}
                    <Button variant="info">
                        <FontAwesomeIcon icon={faTwitter} /> Twitter
                    </Button>{' '}
                    <Button variant="outline-info">
                        <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                    </Button>{' '}
                    <Button variant="danger">
                        <FontAwesomeIcon icon={faPinterestP} /> Pinterest
                    </Button>{' '}
                </p>
                    <Media className="profileMedia">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={profile}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Wikipedia</h5>
                            <p>
                            Isi artikel di atas bersumber dari
                            <Button variant="link" href="https://id.wikipedia.org/wiki/Gamelan">Wikipedia</Button>
                            </p>
                            <p>
                            <Button variant="light">
                                <FontAwesomeIcon icon={faFacebookF} className="fontsumber" />{' '}
                            </Button>
                            <Button variant="light">
                                <FontAwesomeIcon icon={faTwitter} className="fontsumber" />{' '}
                            </Button>
                            <Button variant="light">
                                <FontAwesomeIcon icon={faLinkedinIn} className="fontsumber" />{' '}
                            </Button>
                            <Button variant="light">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fontsumber" />{' '}
                            </Button>
                            </p>
                        </Media.Body>
                    </Media>
                    <p className="pGamelan2">
                        <h5>Subscribe Us</h5>
                        <p>Get the latest posts delivered right to your inbox.</p>
                        <InputGroup className="mb-3 inputProfile">
                            <FormControl
                            placeholder="Enter Your Email..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="info" as={Link} to="/">
                                Subscribe
                            </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </p>
                </Container>
                
            </div>
        </div>
    )
}
export default Gamelan