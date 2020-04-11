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
const Komodo = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonKomodo">
                    <Container className="containerKomodo">
                        <h1 className="h1Komodo">Komodo</h1>
                        <p className="pKomodo">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerKomo">
                <p>
                Komodo, atau juga disebut biawak komodo (Varanus komodoensis), 
                adalah spesies biawak besar yang terdapat di Pulau Komodo, Rinca, 
                Flores, Gili Motang, dan Gili Dasami di Provinsi Nusa Tenggara Timur, 
                Indonesia. Biawak ini oleh penduduk asli pulau Komodo juga disebut dengan 
                nama setempat ora.
                </p>
                <p>
                Komodo merupakan spesies terbesar dari familia Varanidae, sekaligus 
                kadal terbesar di dunia, dengan rata-rata panjang 2-3 meter dan 
                beratnya bisa mencapai 100 kg. Komodo merupakan pemangsa puncak 
                di habitatnya karena sejauh ini tidak diketahui adanya hewan karnivora 
                besar lain selain biawak ini di sebarang geografisnya.
                Tubuhnya yang besar dan reputasinya yang mengerikan membuat mereka menjadi 
                salah satu hewan paling terkenal di dunia. Sekarang, habitat komodo yang 
                sesungguhnya telah menyusut akibat aktivitas manusia, sehingga lembaga 
                IUCN memasukkan komodo sebagai spesies yang rentan terhadap kepunahan. 
                Biawak komodo telah ditetapkan sebagai hewan yang dilindungi oleh pemerintah 
                Indonesia dan habitanya dijadikan taman nasional, yaitu Taman Nasional Komodo, 
                yang tujuannya didirikan untuk melindungi mereka.
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
                            <Button variant="link" href="https://id.wikipedia.org/wiki/Komodo">Wikipedia</Button>
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
                    <p className="pKomodoo">
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
export default Komodo