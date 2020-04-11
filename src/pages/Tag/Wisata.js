import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import photo_danau from '../../images/danau-sentani.jpg'
import photo_toraja from '../../images/tana-toraja.jpg'
import photo_gili from '../../images/trio-gili.jpg'
import WisataChild from './WisataChild'
const Wisata = (props) =>{
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronWisata">
                    <Container className="containerWisata">
                        <h1 className="h1Tag">TEMPAT WISATA</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div className="main-content-area">
                <div className="container post-listing">
                    <div className="row is-flex" style={{textAlign: 'center'}}>
                    <div className="col-sm-6 col-md-4 col-xs-12">
                            <WisataChild 
                                photo={photo_danau} title='Danau Sentani' 
                                link='/sentani' text='Danau Sentani adalah danau yang terletak di Papua Indonesia.
                                 Danau Sentani berada di bawah lereng Pegunungan Cagar Alam Cyclops yang memiliki 
                                 luas sekitar 245.000 hektar. Danau ini terbentang antara Kota Jayapura dan Kabupaten Jayapura.'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <WisataChild 
                                photo={photo_toraja} title='Desa Kete Kesu' 
                                link='/kete' text='Di Tana Toraja, ada satu desa wisata 
                                yang dikenal akan adat dan kehidupan tradisionalnya yaitu,
                                Desa wisata Kete Kesu'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <WisataChild 
                                photo={photo_gili} title='Trio Gili' 
                                link='/trio' text='Trio Gili ibarat magis dan selalu membuat wisatawan 
                                terpesona oleh keindahannya.'
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
export default Wisata
