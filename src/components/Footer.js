import React from 'react'
import { Button, InputGroup, FormControl, Media } from 'react-bootstrap'
import '../App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import photo1 from '../images/raja-ampat.jpg'

library.add(faSearch);

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h6>RECENT POST</h6>
                        <ul className="list-unstyled">
                            <Media style={{marginBottom: '10px'}}>
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={photo1}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <div className="pMedia">
                                    I like fishing becauseit it is always the great way of relaxing
                                    </div>
                                    <div className="pMediaDate">
                                    April 9, 2020 
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media style={{marginBottom: '10px'}}>
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={photo1}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <div className="pMedia">
                                    I like fishing becauseit it is always the great way of relaxing
                                    </div>
                                    <div className="pMediaDate">
                                    April 9, 2020 
                                    </div>
                                </Media.Body>
                            </Media>
                            <Media>
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={photo1}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <div className="pMedia">
                                    I like fishing becauseit it is always the great way of relaxing
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
                                <Button variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Adventures
                                </Button>{' '}
                                <Button variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Getting Started
                                </Button>{' '}
                                <Button variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Lifestyle
                                </Button>{' '}
                                <Button variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Music
                                </Button>{' '}
                                <Button variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Nature
                                </Button>{' '}
                                <Button variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Travel
                                </Button>{' '}
                                <Button variant="outline-secondary" size="sm" className="buttonPage1" style={{ margin: '2px'}}>
                                Video
                                </Button>
                        </ul>
                        <h6>SUBSCRIBE US</h6>
                        <ul className="list-unstyled">
                            <p style={{color: 'grey'}}>Get the latest posts delivered right to your inbox.</p>
                            <InputGroup className="mb-3">
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
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h6>TEXT WIDGET</h6>
                        <p>It's a suitable place for adding small info about your site.
                            Here you can add any text or html like this Bold Text or anything else.
                        </p>
                        <p>
                            All widgets in this footer are reorderable. An email subscription form widget is also available within the theme. 
                            Which you can use in place of this text widget.
                        </p>

                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                            &copy;{new Date().getFullYear()} MrHide06 | Zaki Dani | Khairavi | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer