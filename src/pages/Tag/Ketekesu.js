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
const Ketekesu = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonKete">
                    <Container className="containerKete">
                        <h1 className="h1Kete">Desa Kete Kesu</h1>
                        <p className="pKete">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerKet">
                <p>Kete Kesu adalah suatu desa wisata di kawasan Tana Toraja yang dikenal 
                karena adat dan kehidupan tradisional masyarakat dapat ditemukan di kawasan 
                ini.Di dalam Kete Kesu terdapat peninggalan purbakala berupa kuburan batu 
                yang diperkirakan berusia 500 tahun lebih.[2] Di dalam kubur batu yang menyerupai 
                sampan atau perahu tersebut, tersimpan sisa-sisa tengkorak dan tulang manusia. 
                Hampir semua kubur batu diletakkan menggantung di tebing atau gua. Selain itu, di 
                beberapa tempat juga terlihat kuburan megah milik bangsawan yang telah meninggal dunia.
                </p>
                <p>
                <h6>Desa Adat</h6>
                Sebagian rumah adat yang terletak di desa ini diperkirakan berumur sekitar 300 
                tahun dan letakknya berhadapan dengan lumbung padi kecil.Tidak hanya terdiri 
                dari 6 Tongkonan dan 12 lumbung padi, Kete Kesu juga memiliki tanah seremonial yang 
                dihiasi oleh 20 menhir.Di dalam salah satu Tongkonan terdapat museum yang berisi 
                koleksi benda adat kuno Toraja, mulai dari ukiran, senjata tajam, keramik, patung, 
                kain dari Cina, dan bendera Merah Putih yang konon disebutkan merupakan bendera 
                pertama yang dikibarkan di Toraja. Selain itu, di dalam museum ini juga terdapat 
                pusat pelatihan pembuatan kerajinan dari bambu. Masyarakat yang hidup di desa ini 
                umumnya memiliki keahlian sebagai pemahat dan pelukis, sehingga selain sebagai 
                objek wisata, tempat ini juga dimanfaatkan untuk menjual berbagai pahatan dan 
                suvernir tradisional Toraja
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
                            <Button variant="link" href="https://id.wikipedia.org/wiki/Kete_Kesu">Wikipedia</Button>
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
                    <p className="pKete2">
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
export default Ketekesu