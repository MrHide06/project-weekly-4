import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import photo_gamelan from '../../images/gamelan.jpg'
import photo_sasando from '../../images/sasando.jpg'
import TagChild from './TagChild'
const AlatMusik = (props) =>{
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronAlatMusik">
                    <Container className="containerAlatMusik">
                        <h1 className="h1Tag">Alat Musik</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div className="main-content-area">
                <div className="container post-listing">
                    <div className="row is-flex" style={{textAlign: 'center'}}>
                    <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_gamelan} title='Gamelan' 
                                link='/gamelan' text='Gamelan adalah musik 
                                ansambel tradisional Jawa, Sunda, dan Bali di Indonesia 
                                yang memiliki sistem tangga nada (laras) slendro dan pelog.'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_sasando} title='Sasando' 
                                link='/sasando' text='Sasando adalah sebuah alat musik dawai yang dimainkan dengan dipetik. 
                                Instumen musik ini berasal dari pulau Rote, Nusa Tenggara Timur.'
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
export default AlatMusik
