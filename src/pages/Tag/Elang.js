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
const Elang = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonElang">
                    <Container className="containerElang">
                        <h1 className="h1Elang">Elang Jawa</h1>
                        <p className="pElang">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerEla">
                <p>
                Elang yang bertubuh sedang sampai besar, langsing, 
                dengan panjang tubuh antara 60-70 cm (dari ujung paruh hingga ujung ekor).
                </p>
                <p>
                Kepala berwarna coklat kemerahan (kadru), dengan jambul yang tinggi menonjol 
                (2-4 bulu, panjang hingga 12 cm) dan tengkuk yang coklat kekuningan (kadang tampak 
                keemasan bila terkena sinar matahari). Jambul hitam dengan ujung putih; mahkota 
                dan kumis berwarna hitam, sedangkan punggung dan sayap coklat gelap. Kerongkongan 
                keputihan dengan garis (sebetulnya garis-garis) hitam membujur di tengahnya. 
                Ke bawah, ke arah dada, coret-coret hitam menyebar di atas warna kuning kecoklatan 
                pucat, yang pada akhirnya di sebelah bawah lagi berubah menjadi pola garis 
                (coret-coret) rapat melintang merah sawomatang sampai kecoklatan di atas warna 
                pucat keputihan bulu-bulu perut dan kaki. Bulu pada kaki menutup tungkai hingga 
                dekat ke pangkal jari. Ekor kecoklatan dengan empat garis gelap dan lebar melintang 
                yang tampak jelas di sisi bawah, ujung ekor bergaris putih tipis. Betina berwarna serupa, 
                sedikit lebih besar.
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
                            <Button variant="link" href="https://id.wikipedia.org/wiki/Elang_jawa">Wikipedia</Button>
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
                    <p className="pElango">
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
export default Elang