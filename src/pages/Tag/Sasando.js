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
const Sasando = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonSasando">
                    <Container className="containerSasando">
                        <h1 className="h1Sasando">Sasando</h1>
                        <p className="pSasando">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerSasan">
                <p>Sasando adalah sebuah alat musik dawai yang dimainkan dengan dipetik. 
                Instumen musik ini berasal dari pulau Rote, Nusa Tenggara Timur. 
                Secara harfiah nama Sasando menurut asal katanya dalam bahasa Rote, sasandu, 
                yang berasal dari kata Sandu atau Sanu yang artinya bergetar atau meronta. 
                Suara sasando memiliki kemiripan dengan alat musik dawai lainnya seperti gitar, 
                biola, kecapi, dan harpa. Sasando menurut Organologi tergolong dalam Sitar tabung Bambu.
                </p>
                <p>
                Bagian utama sasando berbentuk tabung panjang yang biasa terbuat dari bambu. Lalu pada 
                bagian tengah, melingkar dari atas ke bawah diberi ganjalan-ganjalan di mana senar-senar 
                (dawai-dawai) yang direntangkan di tabung, dari atas kebawah bertumpu. Ganjalan-ganjalan 
                ini memberikan nada yang berbeda-beda kepada setiap petikan senar. Lalu tabung sasando ini 
                ditaruh dalam sebuah wadah yang terbuat dari semacam anyaman daun lontar yang dibuat 
                seperti kipas. Wadah ini merupakan tempat resonansi sasando. Perkembangan Sasando berjalan 
                seiring perubahan waktu. Modifikasi dan peningkatan kualitas bunyi mulai dilakukan. Agar 
                mendapat bunyi yang lebih keras dan bisa disesuai dalam wadah pertunjukkan musik apapun 
                maka Sasando akustik beralih perlahan lahan ke Sasando elektrik. Bentuk Sasandopun 
                dimodifikasi dan dibuat lebih modern dan elegan. Ditahun 2018 bahkan mulai diciptakan 
                oleh seorang pemain Sasando profesional Natalino Mella Sasando yang diberi nama Sasando 
                Bariton. Sasando bariton mempunyai bunyi yg berbeda dengan sasando pada umumnya. 
                Sasando ini menggunakan jenis senar yang berbeda dalam ketebalannya dan mempunyai 
                bunyi yang lebih bulat dan lebih terasa bassnya. Dilengkapi dengan 32 senar berwarna dan 
                bridge yang bisa dipindahkan serta bisa dimainkan dengan teknik 10 jari yang membuat sasando 
                ini akan lebih kaya untuk dipelajari
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
                            <Button variant="link" href="https://id.wikipedia.org/wiki/Sasando">Wikipedia</Button>
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
                    <p className="pSasando2">
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
export default Sasando