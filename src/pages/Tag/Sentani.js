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
const Sentani = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonSentani jumbotronPage darkenImage">
                    <Container className="containerPage">
                        <h1 className="h1Sentani">Danau Sentani</h1>
                        <p className="pSentani">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerSen">
                <p>Danau Sentani adalah danau yang terletak di Papua Indonesia. 
                Danau Sentani berada di bawah lereng Pegunungan Cagar Alam Cyclops 
                yang memiliki luas sekitar 245.000 hektar. Danau ini terbentang antara Kota 
                Jayapura dan Kabupaten Jayapura, Papua. Danau Sentani yang memiliki luas sekitar 
                9.360 hektar dan berada pada ketinggian 75 mdpl. Danau Sentani merupakan danau terluas 
                di Papua.Di danau ini juga terdapat 21 buah pulau kecil menghiasi danau yang indah ini. 
                Arti kata Sentani berarti "di sini kami tinggal dengan damai”. Nama Sentani sendiri 
                pertama kali disebut oleh seorang Pendeta Kristen BL Bin ketika melaksanakan misionaris 
                di wilayah danau ini pada tahun 1898.</p>
                <p>
                <h6>Pariwisata</h6>
                Danau ini sudah dikelola menjadi objek wisata karena berjarak 50 kilometer dari 
                Jayapura dan mudah dijangkau, sebagai pelengkap di danau ini sudah banyak terdapat 
                perahu wisata untuk berkeliling di Danau Sentani.
                Di danau ini juga diadakan Festival Danau Sentani untuk menarik wisatawan. Festival 
                Danau Sentani biasanya diadakan pada pertengahan bulan Juni tiap tahun, FDS sendiri 
                telah ditetapkan sebagai festival tahunan dan masuk dalam kalender pariwisata utama. 
                Festival ini diisi dengan tarian-tarian adat di atas perahu, tarian perang khas Papua, 
                upacara adat seperti penobatan Ondoafi, dan sajian berbagai kuliner khas Papua.
                </p>
                <TagSosmed />
                </Container>
                
            </div>
        </div>
    )
}
export default Sentani