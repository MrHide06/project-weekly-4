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
const Wakatobi = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonWakatobi">
                    <Container className="containerWakatobi">
                        <h1 className="h1Wakatobi">Taman Nasional Wakatobi</h1>
                        <p className="pWakatobi">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerWaka">
                <p>
                Taman Nasional Wakatobi merupakan salah satu dari 50 taman nasional di Indonesia, yang 
                terletak di kabupaten Wakatobi, Sulawesi Tenggara. Taman nasional ini ditetapkan pada 
                tahun 2002, dengan total area 1,39 juta ha, menyangkut keanekaragaman hayati laut, skala 
                dan kondisi karang; yang menempati salah satu posisi prioritas tertinggi dari konservasi 
                laut di Indonesia. Kedalaman air di taman nasional ini bervariasi, bagian terdalam mencapai 
                1.044 meter di bawah permukaan air laut.
                </p>
                <p>
                Di taman ini terdapat panorama keindahan alam bawah laut yang memiliki 25 buah gugusan 
                terumbu karang. Gugusan terumbu karang dapat dijumpai sekitar 112 jenis dari 13 famili 
                yang terletak pada 25 titik di sepanjang 600 km garis pantai. Bagi para wisatawan yang menyukai 
                keindahan alam bawah laut dapat melakukan beberapa kegiatan di Taman Nasional Wakatobi, 
                seperti menyelam, snorkeling dan berenang untuk melihat gugusan terumbu karang yang indah 
                dan berbagai hewan bawah laut dan juga menyaksikan berbagai kebudayaan masyarakat setempat.
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
                            <Button variant="link" href="https://id.wikipedia.org/wiki/Taman_Nasional_Wakatobi">Wikipedia</Button>
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
                    <p className="pWakatobio">
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
export default Wakatobi