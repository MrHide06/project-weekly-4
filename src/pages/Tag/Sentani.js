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
const Sentani = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonSentani">
                    <Container className="containerSentani">
                        <h1 className="h1Sentani">Danau Sentani</h1>
                        <p className="pSentani">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerSen">
                <p>Danau Sentani adalah danau yang terletak di Papua Indonesia. 
                Danau Sentani berada di bawah lereng Pegunungan Cagar Alam Cyclops 
                yang memiliki luas sekitar 245.000 hektar. Danau ini terbentang antara Kota 
                Jayapura dan Kabupaten Jayapura, Papua. Danau Sentani yang memiliki luas sekitar 
                9.360 hektar dan berada pada ketinggian 75 mdpl. Danau Sentani merupakan danau terluas 
                di Papua.Di danau ini juga terdapat 21 buah pulau kecil menghiasi danau yang indah ini. 
                Arti kata Sentani berarti "di sini kami tinggal dengan damai”. Nama Sentani sendiri 
                pertama kali disebut oleh seorang Pendeta Kristen BL Bin ketika melaksanakan misionaris 
                di wilayah danau ini pada tahun 1898.</p>
                <p>
                <h6>Pariwisata</h6>
                Danau ini sudah dikelola menjadi objek wisata karena berjarak 50 kilometer dari 
                Jayapura dan mudah dijangkau, sebagai pelengkap di danau ini sudah banyak terdapat 
                perahu wisata untuk berkeliling di Danau Sentani.
                Di danau ini juga diadakan Festival Danau Sentani untuk menarik wisatawan. Festival 
                Danau Sentani biasanya diadakan pada pertengahan bulan Juni tiap tahun, FDS sendiri 
                telah ditetapkan sebagai festival tahunan dan masuk dalam kalender pariwisata utama. 
                Festival ini diisi dengan tarian-tarian adat di atas perahu, tarian perang khas Papua, 
                upacara adat seperti penobatan Ondoafi, dan sajian berbagai kuliner khas Papua.
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
                            <Button variant="link" href="https://id.wikipedia.org/wiki/Danau_Sentani">Wikipedia</Button>
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
                    <p className="pSentanii">
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
export default Sentani