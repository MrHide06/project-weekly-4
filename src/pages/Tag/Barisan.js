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
const Barisan = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonBarisan">
                    <Container className="containerBarisan">
                        <h1 className="h1Barisan">Taman Nasional Bukit Barisan Selatan</h1>
                        <p className="pBarisan">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerBaris">
                <p>
                Taman Nasional Bukit Barisan Selatan adalah sebuah taman nasional yang 
                ditujukan untuk melindungi hutan hujan tropis pulau Sumatra beserta kekayaan 
                alam hayati yang dimilikinya. UNESCO menjadikan Taman Nasional Bukit Barisan 
                Selatan sebagai Warisan Dunia. Bukit Barisan Selatan dinyatakan sebagai Cagar 
                Alam Suaka Margasatwa pada tahun 1935 dan menjadi Taman Nasional pada tahun 1982. 
                Pada awalnya ukuran taman adalah seluas 356.800 hektare . Tetapi luas taman saat 
                ini yang dihitung dengan menggunakan GIS kurang-lebih sebesar 324.000 Ha.
                </p>
                <p>
                Taman Nasional Bukit Barisan Selatan terletak di ujung wilayah barat daya Sumatra. 
                Tujuhpuluh persen dari taman (249.552 hektare) termasuk dalam administrasi wilayah 
                Lampung Barat dan wilayah Tanggamus, di mana keduanya adalah bagian dari Provinsi 
                Lampung. Bagian lainnya dari taman mencakup 74.822 hektare (23% dari luas taman 
                keseluruhan) dan berada di wilayah Kaur dari Provinsi Bengkulu. Provinsi Sumatra 
                Selatan juga sangat penting bagi tumpang-tindih perbatasan taman dengan perbatasan provinsi.
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
                            <Button variant="link" href="https://id.wikipedia.org/wiki/Taman_Nasional_Bukit_Barisan_Selatan">Wikipedia</Button>
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
                    <p className="pBarisano">
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
export default Barisan