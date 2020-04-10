import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import photo1 from '../images/raja-ampat.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HomeChild from './HomeChild'
import '../App.scss'
library.add(faArrowRight)

const Home = (props) => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbroton">
                    <Container className="containerJumbroton">
                        <h1 className="h1Jumbroton">Selamat Datang</h1>
                        <p className="pJumbroton">
                        Blog ini berisi tentang Kebudayaan, Hewan Epidemik, Tempat Wisata, Taman Nasional, dan Alat Musik
                        yang ada di INDONESIA
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div className="main-content-area">
                <div className="container post-listing">
                    <div className="row is-flex">
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Travel'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Travel'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Travel'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Travel'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Travel'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo1} tittle='Raja Ampat' 
                                link='/' text='Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang 
                                berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua'
                                date='Travel'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Container style={{textAlign: 'center'}}>
                    <p>Page 1 of 2 {'  '}
                        <Button variant="outline-secondary" size="sm" className="buttonPage1" as={Link} to="/page/2">
                            Older Articles{' '}
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </Button>
                    </p>
                </Container>
            </div>
           
        </div>
    )
}
export default Home