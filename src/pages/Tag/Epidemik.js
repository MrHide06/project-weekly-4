import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import photo_komodo from '../../images/komodo.jpg'
import photo_elang from '../../images/elang-jawa.jpg'
import EpidemikChild from './EpidemikChild'
const Epidemik = (props) =>{
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronEpidemik darkenImage">
                    <Container className="containerEpidemik">
                        <h1 className="h1Tag">Epidemik</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div className="main-content-area">
                <div className="container post-listing">
                    <div className="row is-flex" style={{textAlign: 'center'}}>
                    <div className="col-sm-6 col-md-4 col-xs-12">
                            <EpidemikChild 
                                photo={photo_komodo} title='Komodo' 
                                link='/komodo' text='Komodo adalah spesies biawak 
                                besar yang terdapat di Pulau Komodo, Rinca, Flores, 
                                Gili Motang, dan Gili Dasami di Nusa Tenggara Timur, Indonesia.'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <EpidemikChild 
                                photo={photo_elang} title='Elang Jawa' 
                                link='/elang' text='Elang jawa (Nisaetus bartelsi) adalah salah satu 
                                spesies elang berukuran sedang dari keluarga Accipitridae dan genus 
                                Nisaetus yang endemik di Pulau Jawa. Satwa ini dianggap identik dengan 
                                lambang negara Republik Indonesia, yaitu Garuda.'
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
export default Epidemik
