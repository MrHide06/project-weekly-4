import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import photo_barisan from '../../images/taman-barisan.jpg'
import photo_wakatobi from '../../images/taman-wakatobi.jpg'
import TagChild from './TagChild'
const Taman = (props) =>{
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronTaman darkenImage">
                    <Container className="containerTaman">
                        <h1 className="h1Tag">Taman Nasional</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div className="main-content-area">
                <div className="container post-listing">
                    <div className="row is-flex" style={{textAlign: 'center'}}>
                    <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_barisan} title='Taman Nasional Barisan' 
                                link='/barisan' text='Taman Nasional Bukit Barisan Selatan 
                                adalah sebuah taman nasional yang ditujukan untuk melindungi 
                                hutan hujan tropis pulau Sumatra beserta kekayaan alam hayati 
                                yang dimilikinya. UNESCO menjadikan Taman Nasional Bukit Barisan 
                                Selatan sebagai Warisan Dunia'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_wakatobi} title='Taman Nasional Wakatobi' 
                                link='/wakatobi' text='Taman Nasional Wakatobi merupakan 
                                salah satu dari 50 taman nasional di Indonesia'
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
export default Taman
