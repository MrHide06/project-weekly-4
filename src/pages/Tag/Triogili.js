import React from 'react'
import '../../App.scss'
import { Jumbotron, Container, Button, Media, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import profile from '../../images/profile2.png'
import TagSosmed from './TagSosmed'

library.add(faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faMapMarkerAlt)
const Triogili = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonTrio">
                    <Container className="containerTrio">
                        <h1 className="h1Trio">Trio Gili</h1>
                        <p className="pTrio">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerTri">
                <p>Kepulauan Gili atau Tiga Gili adalah kepulauan yang terdiri dari tiga 
                pulau kecil atau pulau Gili kembar tiga Gili Trawangan, Gili Meno, 
                dan Gili Air tepat di lepas pantai barat laut Lombok, Indonesia.
                Kepulauan ini merupakan destinasi wisata populer bagi wisatawan. 
                Setiap pulau memiliki beberapa sanggraloka kecil, biasanya terdiri dari kumpulan pondok 
                untuk wisatawan, kolam kecil, dan restoran. Sebagian besar penduduk lokal tinggal di 
                Trawangan di kota yang membentang di sepanjang sisi timurnya di pedalaman (yang juga 
                merupakan tempat di mana perkembangan terakhir terjadi). Lalu lintas mobil dan kendaraan 
                bermotor dilarang di kepulauan ini oleh peraturan setempat, dengan demikian metode 
                transportasi yang disukai adalah dengan berjalan kaki dan bersepeda atau kereta yang ditarik 
                kuda yang disebut cidomo. Penyelaman skuba dan bebas di dan sekitar Kepulauan Gili juga 
                populer karena berlimpahnya kehidupan laut dan formasi karang yang menarik. 
                Tempat menyelam yang paling terkenal adalah titik Hiu, titik Manta, dan karang Simon.
                </p>
                <p>
                <h6>Etimologi</h6>
                Nama "Kepulauan Gili" adalah keliru, karena Gili hanya berarti "pulau kecil" dalam 
                bahasa Sasak. Akibatnya, sebagian besar pulau di sekitar pantai Lombok menggunakan 
                Gili dalam nama mereka, meskipun kebingungan dihindari dengan menyebut Gili lain 
                (dalam bahasa Inggris) di sekitar pantai Lombok hanya dengan nama yang sebenarnya.
                </p>
                <TagSosmed />
                </Container>
                
            </div>
        </div>
    )
}
export default Triogili