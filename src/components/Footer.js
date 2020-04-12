import React from 'react'
import { Button, InputGroup, FormControl, Media } from 'react-bootstrap'
import '../App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import photo1 from '../images/raja-ampat.jpg'
import photo2 from '../images/prambanan.jpg'
import photo3 from '../images/harimau.jpg'
import logo from '../images/logo2.png'
library.add(faSearch);

const Footer = () => {
    return (
        <div className="main-footer">
            <hr /> 
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h6>RECENT POST</h6>
                        <ul className="list-unstyled">
                            <Media style={{marginBottom: '10px'}}>
                                <img
                                    className="footerClass"
                                    width={80}
                                    height={80}
                                    className="mr-3"
                                    src={photo1}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <div className="pMedia">
                                    Raja Ampat
                                    </div>
                                    <div className="pMediaDate">
                                    April 9, 2020 
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media style={{marginBottom: '10px'}}>
                                <img
                                    className="footerClass"
                                    width={80}
                                    height={80}
                                    className="mr-3"
                                    src={photo2}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <div className="pMedia">
                                    Candi Prambanan
                                    </div>
                                    <div className="pMediaDate">
                                    April 9, 2020 
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media>
                                <img
                                    className="footerClass"
                                    width={80}
                                    height={80}
                                    className="mr-3"
                                    src={photo3}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <div className="pMedia">
                                    Harimau Sumatra
                                    </div>
                                    <div className="pMediaDate">
                                    April 9, 2020 
                                    </div>
                                </Media.Body>
                            </Media>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h6>TAG CLOUD</h6>
                        <ul className="list-unstyled">
                                <Button as={Link} to="/tag/tempatwisata" variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Tempat Wisata
                                </Button>{' '}
                                <Button as={Link} to="/tag/kebudayaan" variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Kebudayaan
                                </Button>{' '}
                                <Button as={Link} to="/tag/alatmusik" variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Alat Musik
                                </Button>{' '}
                                <Button as={Link} to="/tag/epidemik" variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Epidemik Indonesia
                                </Button>{' '}
                                <Button as={Link} to="/tag/taman" variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Taman Nasional
                                </Button>{' '}
                        </ul>
                        <h6>SUBSCRIBE US</h6>
                        <ul className="list-unstyled">
                            <p style={{color: '#999'}}>Get the latest posts delivered right to your inbox.</p>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Enter Your Email..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                <Button variant="info" as={Link} to="/" className="subsButton">
                                    Subscribe
                                </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h6>Pesona Indonesia</h6>
                        <img
                            width={300}
                            height={150}
                            className="mr-3"
                            src={logo}
                            alt="Generic placeholder"
                        />
                        <p className="pMedia">
                        Wonderful Indonesia atau Pesona Indonesia adalah janji pariwisata Indonesia kepada dunia. 
                        Kata “Wonderful” atau “Pesona” mengandung janji bahwa Indonesia kaya dengan ketakjuban, 
                        dari segala aspek manusia maupun alamnya, yang mengusik kalbu dan menjanjikan pengalaman 
                        baru yang menyenangkan.
                        </p>

                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm pMedia">
                            &copy;{new Date().getFullYear()} MrHide06 | ZakiyDani | Khairavi | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;