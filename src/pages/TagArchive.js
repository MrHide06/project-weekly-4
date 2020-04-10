import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import photo_wisata from '../images/prambanan.jpg'
import photo_kebudayaan from '../images/batik.jpg'
import photo_musik from '../images/angklung.jpg'
import photo_hewan from '../images/harimau.jpg'
import photo_taman from '../images/taman-baluran.jpg'
import TagChild from './TagChild'

const TagArchive = (props) => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronTag">
                    <Container className="containerTag">
                        <h1 className="h1Tag">TAG ARCHIVE</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div className="main-content-area">
                <div className="container post-listing">
                    <div className="row is-flex" style={{textAlign: 'center'}}>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_wisata} category='TEMPAT WISATA' 
                                link='/'
                                posts='3 POSTS'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_kebudayaan} category='KEBUDAYAAN' 
                                link='/'
                                posts='3 POSTS'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_musik} category='ALAT MUSIK' 
                                link='/'
                                posts='2 POSTS'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_hewan} category='EPIDEMIK INDONESIA' 
                                link='/'
                                posts='2 POSTS'
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <TagChild 
                                photo={photo_taman} category='TAMAN NASIONAL' 
                                link='/'
                                posts='2 POSTS'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TagArchive