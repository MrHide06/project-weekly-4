import React from 'react'
import { Container, Button } from 'react-bootstrap'
import photo_musik from '../images/sasando.jpg'
import photo_epidemik from '../images/komodo.jpg'
import photo_kebudayaan from '../images/tari-piring.jpg'
import photo_taman from '../images/taman-barisan.jpg'
import photo_hewan from '../images/elang-jawa.jpg'
import photo_danau from '../images/danau-sentani.jpg'
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
                                photo={photo_musik} title='Alat Musik Sasando' 
                                link='/sasando' text='Sasando adalah sebuah alat musik dawai yang 
                                dimainkan dengan dipetik. Instumen musik ini berasal dari pulau Rote, 
                                Nusa Tenggara Timur.'
                                category='Alat Musik'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo_epidemik} title='Komodo Dragon' 
                                link='/komodo' text='Komodo adalah spesies biawak besar yang terdapat di Pulau Komodo, Rinca, Flores, Gili Motang, 
                                dan Gili Dasami di Nusa Tenggara Timur, Indonesia.'
                                category='Epidemik'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo_kebudayaan} title='Tari Piring' 
                                link='/piring' text='Tari piring atau tari piriang dalam bahasa Minangkabau 
                                adalah tarian tradisional Minangkabau yang melibatkan atraksi piring.'
                                category='Kebudayaan'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo_taman} title='Taman Nasional Barisan' 
                                link='/barisan' text='Taman Nasional Bukit Barisan Selatan adalah sebuah taman 
                                nasional yang ditujukan untuk melindungi hutan hujan tropis pulau Sumatra beserta 
                                kekayaan alam hayati yang dimilikinya. UNESCO menjadikan Taman Nasional Bukit Barisan 
                                Selatan sebagai Warisan Dunia'
                                category='Taman Nasional'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo_hewan} title='Elang Jawa' 
                                link='/elang' text='Elang jawa (Nisaetus bartelsi) adalah 
                                salah satu spesies elang berukuran sedang dari keluarga Accipitridae dan genus Nisaetus
                                yang endemik di Pulau Jawa. Satwa ini dianggap identik dengan lambang negara Republik Indonesia, 
                                yaitu Garuda.'
                                category='Epidemik'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <SecondChild 
                                photo={photo_danau} title='Danau Sentani' 
                                link='/sentani' text='Danau Sentani adalah danau yang terletak di Papua Indonesia.
                                 Danau Sentani berada di bawah lereng Pegunungan Cagar Alam Cyclops yang memiliki 
                                 luas sekitar 245.000 hektar. Danau ini terbentang antara Kota Jayapura dan Kabupaten Jayapura.'
                                category='Tempat Wisata'
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