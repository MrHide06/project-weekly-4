import React from 'react'
import '../../App.scss'
import { Jumbotron, Container, Button, Media, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profile from '../../images/profile2.png'
import TagSosmed from './TagSosmed'


const Barisan = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonBarisan">
                    <Container className="containerBarisan">
                        <h1 className="h1Barisan">Taman Nasional Bukit Barisan Selatan</h1>
                        <p className="pBarisan">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerBaris">
                <p>
                Taman Nasional Bukit Barisan Selatan adalah sebuah taman nasional yang 
                ditujukan untuk melindungi hutan hujan tropis pulau Sumatra beserta kekayaan 
                alam hayati yang dimilikinya. UNESCO menjadikan Taman Nasional Bukit Barisan 
                Selatan sebagai Warisan Dunia. Bukit Barisan Selatan dinyatakan sebagai Cagar 
                Alam Suaka Margasatwa pada tahun 1935 dan menjadi Taman Nasional pada tahun 1982. 
                Pada awalnya ukuran taman adalah seluas 356.800 hektare . Tetapi luas taman saat 
                ini yang dihitung dengan menggunakan GIS kurang-lebih sebesar 324.000 Ha.
                </p>
                <p>
                Taman Nasional Bukit Barisan Selatan terletak di ujung wilayah barat daya Sumatra. 
                Tujuhpuluh persen dari taman (249.552 hektare) termasuk dalam administrasi wilayah 
                Lampung Barat dan wilayah Tanggamus, di mana keduanya adalah bagian dari Provinsi 
                Lampung. Bagian lainnya dari taman mencakup 74.822 hektare (23% dari luas taman 
                keseluruhan) dan berada di wilayah Kaur dari Provinsi Bengkulu. Provinsi Sumatra 
                Selatan juga sangat penting bagi tumpang-tindih perbatasan taman dengan perbatasan provinsi.
                </p>
                <TagSosmed />
                </Container>
                
            </div>
        </div>
    )
}
export default Barisan