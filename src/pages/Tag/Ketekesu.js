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
const Ketekesu = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonKete jumbotronPage darkenImage">
                    <Container className="containerPage">
                        <h1 className="h1Kete">Desa Kete Kesu</h1>
                        <p className="pKete">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerKet">
                <p>Kete Kesu adalah suatu desa wisata di kawasan Tana Toraja yang dikenal 
                karena adat dan kehidupan tradisional masyarakat dapat ditemukan di kawasan 
                ini.Di dalam Kete Kesu terdapat peninggalan purbakala berupa kuburan batu 
                yang diperkirakan berusia 500 tahun lebih.[2] Di dalam kubur batu yang menyerupai 
                sampan atau perahu tersebut, tersimpan sisa-sisa tengkorak dan tulang manusia. 
                Hampir semua kubur batu diletakkan menggantung di tebing atau gua. Selain itu, di 
                beberapa tempat juga terlihat kuburan megah milik bangsawan yang telah meninggal dunia.
                </p>
                <p>
                <h6>Desa Adat</h6>
                Sebagian rumah adat yang terletak di desa ini diperkirakan berumur sekitar 300 
                tahun dan letakknya berhadapan dengan lumbung padi kecil.Tidak hanya terdiri 
                dari 6 Tongkonan dan 12 lumbung padi, Kete Kesu juga memiliki tanah seremonial yang 
                dihiasi oleh 20 menhir.Di dalam salah satu Tongkonan terdapat museum yang berisi 
                koleksi benda adat kuno Toraja, mulai dari ukiran, senjata tajam, keramik, patung, 
                kain dari Cina, dan bendera Merah Putih yang konon disebutkan merupakan bendera 
                pertama yang dikibarkan di Toraja. Selain itu, di dalam museum ini juga terdapat 
                pusat pelatihan pembuatan kerajinan dari bambu. Masyarakat yang hidup di desa ini 
                umumnya memiliki keahlian sebagai pemahat dan pelukis, sehingga selain sebagai 
                objek wisata, tempat ini juga dimanfaatkan untuk menjual berbagai pahatan dan 
                suvernir tradisional Toraja
                </p>
                <TagSosmed />
                </Container>
                
            </div>
        </div>
    )
}
export default Ketekesu