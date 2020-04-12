import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import photo1 from '../images/wayang-kulit.jpg'
import photo2 from '../images/trio-gili.jpg'
import photo3 from '../images/taman-wakatobi.jpg'
import photo4 from '../images/tari-saman.jpg'
import photo5 from '../images/tana-toraja.jpg'
import photo6 from '../images/gamelan.jpg'
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
                <Jumbotron fluid className="jumbroton darkenImage">
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
                                photo={photo1} title='Wayang Kulit' 
                                link='/wayang' text='Wayang kulit adalah seni tradisional 
                                Indonesia yang terutama berkembang di Jawa.'
                                category='Kebudayaan'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo2} title='Trio Gili' 
                                link='/trio' text='Tri Gili ibarat magis dan selalu membuat wisatawan 
                                terpesona oleh keindahannya.'
                                category='Tempat Wisata'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo3} title='Taman Nasional Wakatobi' 
                                link='/wakatobi' text='Taman Nasional Wakatobi merupakan salah satu dari 
                                50 taman nasional di Indonesia'
                                category='Taman Nasional'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo4} title='Tari Saman' 
                                link='/saman' text='Tari Saman adalah sebuah tarian Suku Gayo 
                                yang biasa ditampilkan untuk merayakan peristiwa-peristiwa penting dalam adat.'
                                category='Kebudayaan'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo5} title='Desa Kete Kesu' 
                                link='/kete' text='Di Tana Toraja, ada satu desa wisata 
                                yang dikenal akan adat dan kehidupan tradisionalnya yaitu,
                                Desa wisata Kete Kesu'
                                category='Tempat Wisata'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <HomeChild 
                                photo={photo6} title='Gamelan' 
                                link='/gamelan' text='Gamelan adalah musik ansambel tradisional Jawa, Sunda, dan Bali di 
                                Indonesia yang memiliki sistem tangga nada (laras) slendro dan pelog.'
                                category='Alat Musik'
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