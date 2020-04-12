import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import photo_wayang from '../../images/wayang-kulit.jpg'
import photo_saman from '../../images/tari-saman.jpg'
import photo_piring from '../../images/tari-piring.jpg'
import TagChild from './TagChild'
const Kebudayaan = (props) =>{
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronKebudayaan">
                    <Container className="containerKebudayaan">
                        <h1 className="h1Tag">KEBUDAYAAN</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div className="main-content-area">
                <div className="container post-listing">
                    <div className="row is-flex" style={{textAlign: 'center'}}>
                    <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_wayang} title='Wayang Kulit' 
                                link='/wayang' text='Wayang kulit adalah seni tradisional Indonesia yang 
                                terutama berkembang di Jawa.'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_saman} title='Tari Saman' 
                                link='/saman' text='Tari Saman adalah sebuah tarian 
                                Suku Gayo yang biasa ditampilkan untuk merayakan peristiwa-peristiwa 
                                penting dalam adat.'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_piring} title='Tari Piring' 
                                link='/piring' text='Tari piring atau tari piriang dalam bahasa Minangkabau 
                                adalah tarian tradisional Minangkabau yang melibatkan atraksi piring.'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Container style={{textAlign: 'center'}}>
                    <p>
                        Page 1 of 1 
                    </p>
                </Container>
            </div>
        </div>
    )
}
export default Kebudayaan
