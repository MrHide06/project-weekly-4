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
const Sasando = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonSasando darkenImage">
                    <Container className="containerSasando">
                        <h1 className="h1Sasando">Sasando</h1>
                        <p className="pSasando">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerSasan">
                <p>Sasando adalah sebuah alat musik dawai yang dimainkan dengan dipetik. 
                Instumen musik ini berasal dari pulau Rote, Nusa Tenggara Timur. 
                Secara harfiah nama Sasando menurut asal katanya dalam bahasa Rote, sasandu, 
                yang berasal dari kata Sandu atau Sanu yang artinya bergetar atau meronta. 
                Suara sasando memiliki kemiripan dengan alat musik dawai lainnya seperti gitar, 
                biola, kecapi, dan harpa. Sasando menurut Organologi tergolong dalam Sitar tabung Bambu.
                </p>
                <p>
                Bagian utama sasando berbentuk tabung panjang yang biasa terbuat dari bambu. Lalu pada 
                bagian tengah, melingkar dari atas ke bawah diberi ganjalan-ganjalan di mana senar-senar 
                (dawai-dawai) yang direntangkan di tabung, dari atas kebawah bertumpu. Ganjalan-ganjalan 
                ini memberikan nada yang berbeda-beda kepada setiap petikan senar. Lalu tabung sasando ini 
                ditaruh dalam sebuah wadah yang terbuat dari semacam anyaman daun lontar yang dibuat 
                seperti kipas. Wadah ini merupakan tempat resonansi sasando. Perkembangan Sasando berjalan 
                seiring perubahan waktu. Modifikasi dan peningkatan kualitas bunyi mulai dilakukan. Agar 
                mendapat bunyi yang lebih keras dan bisa disesuai dalam wadah pertunjukkan musik apapun 
                maka Sasando akustik beralih perlahan lahan ke Sasando elektrik. Bentuk Sasandopun 
                dimodifikasi dan dibuat lebih modern dan elegan. Ditahun 2018 bahkan mulai diciptakan 
                oleh seorang pemain Sasando profesional Natalino Mella Sasando yang diberi nama Sasando 
                Bariton. Sasando bariton mempunyai bunyi yg berbeda dengan sasando pada umumnya. 
                Sasando ini menggunakan jenis senar yang berbeda dalam ketebalannya dan mempunyai 
                bunyi yang lebih bulat dan lebih terasa bassnya. Dilengkapi dengan 32 senar berwarna dan 
                bridge yang bisa dipindahkan serta bisa dimainkan dengan teknik 10 jari yang membuat sasando 
                ini akan lebih kaya untuk dipelajari
                </p>
                <TagSosmed />
                </Container>
                
            </div>
        </div>
    )
}
export default Sasando