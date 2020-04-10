import React from 'react'
import { Container, Button } from 'react-bootstrap'
import photo1 from '../images/Bunga-Rafflesia.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SecondChild from './SecondChild'
import '../App.scss'
library.add(faArrowLeft)

const Second = (props) => {
    return (
        <div>
            <div className="main-content-area">
                <div className="container post-listing">
                    <div className="row is-flex">
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Nature'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Nature'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Nature'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Nature'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Nature'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Nature'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Container style={{textAlign: 'center'}}>
                    <p>
                        <Button variant="outline-secondary" size="sm" className="buttonPage1" as={Link} to='/'>
                            <FontAwesomeIcon icon={faArrowLeft}/>{' '}
                            Newer Articles
                        </Button> {'  '}
                        Page 2 of 2 
                    </p>
                </Container>
            </div>
            
        </div>
    )
}
export default Second