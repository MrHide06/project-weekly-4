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
const Elang = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonElang darkenImage">
                    <Container className="containerElang">
                        <h1 className="h1Elang">Elang Jawa</h1>
                        <p className="pElang">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerEla">
                <p>
                Elang yang bertubuh sedang sampai besar, langsing, 
                dengan panjang tubuh antara 60-70 cm (dari ujung paruh hingga ujung ekor).
                </p>
                <p>
                Kepala berwarna coklat kemerahan (kadru), dengan jambul yang tinggi menonjol 
                (2-4 bulu, panjang hingga 12 cm) dan tengkuk yang coklat kekuningan (kadang tampak 
                keemasan bila terkena sinar matahari). Jambul hitam dengan ujung putih; mahkota 
                dan kumis berwarna hitam, sedangkan punggung dan sayap coklat gelap. Kerongkongan 
                keputihan dengan garis (sebetulnya garis-garis) hitam membujur di tengahnya. 
                Ke bawah, ke arah dada, coret-coret hitam menyebar di atas warna kuning kecoklatan 
                pucat, yang pada akhirnya di sebelah bawah lagi berubah menjadi pola garis 
                (coret-coret) rapat melintang merah sawomatang sampai kecoklatan di atas warna 
                pucat keputihan bulu-bulu perut dan kaki. Bulu pada kaki menutup tungkai hingga 
                dekat ke pangkal jari. Ekor kecoklatan dengan empat garis gelap dan lebar melintang 
                yang tampak jelas di sisi bawah, ujung ekor bergaris putih tipis. Betina berwarna serupa, 
                sedikit lebih besar.
                </p>
                <TagSosmed />
                </Container>
                
            </div>
        </div>
    )
}
export default Elang