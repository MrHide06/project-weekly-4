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
const Gamelan = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonGamelan">
                    <Container className="containerGamelan">
                        <h1 className="h1Gamelan">Gamelan</h1>
                        <p className="pGamelan">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerGame">
                <p>Gamelan adalah musik ansambel tradisional Jawa, Sunda, dan Bali di Indonesia 
                yang memiliki tangga nada pentatonis dalam sistem tangga nada (laras) slendro dan pelog. 
                Terdiri dari instrumen musik perkusi yang digunakan pada seni musik karawitan. 
                Instrumen yang paling umum digunakan adalah metalofon antara lain gangsa, gender, bonang, 
                gong, saron, slenthem dimainkan oleh wiyaga menggunakan palu (pemukul) dan membranofon berupa 
                kendhang yang dimainkan dengan tangan. Juga idiofon berupa kemanak dan metalofon lain adalah 
                beberapa di antara instrumen gamelan yang umum digunakan. Instrumen lain termasuk xilofon 
                berupa gambang, aerofon berupa seruling, kordofon berupa rebab, dan kelompok vokal disebut 
                sindhen
                </p>
                <p>
                Seperangkat gamelan dikelompokkan menjadi dua, yakni gangsa pakurmatan dan gangsa ageng. 
                Gangsa pakurmatan dimainkan untuk mengiringi hajad dalem (upacara adat karaton), jumenengan 
                (upacara penobatan raja atau ratu), tingalan dalem (peringatan kenaikan takhta raja atau ratu), 
                garebeg (upacara peristiwa penting), sekaten (upacara peringatan hari lahir Nabi Muhammad). 
                Gangsa ageng dimainkan sebagai pengiring pergelaran seni budaya umumnya dipakai untuk mengiringi 
                beksan (seni tari), wayang (seni pertunjukan), uyon-uyon (upacara adat/hajatan), dan lain-lain. 
                Saat ini, gamelan banyak digunakan di pulau Jawa, Madura, Bali, dan Lombok.
                </p>
                <TagSosmed />
                </Container>
                
            </div>
        </div>
    )
}
export default Gamelan