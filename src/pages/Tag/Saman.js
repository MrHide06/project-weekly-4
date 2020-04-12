import React from 'react'
import Isi from './Isi'
import Images from '../../images/tari-saman.jpg'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Saman() {
    return (
        <div>
            <Jumbotron fluid className="jumbotronSaman DarkenImage">
                <Container className="containerSaman">
                    <h1 className="h1Saman">Tari Saman</h1>
                    <p className="pSaman">
                        Saturday, Apr 10, 2020
                    </p>
                </Container>
            </Jumbotron>
            <Isi 
                text1="Tari Saman adalah sebuah tarian Suku Gayo yang biasa ditampilkan untuk 
                        merayakan peristiwa-peristiwa penting dalam adat. Syair dalam tarian saman 
                        mempergunakan Bahasa Gayo. Selain itu biasanya tarian ini juga ditampilkan untuk 
                        merayakan kelahiran Nabi Muhammad SAW. Dalam beberapa literatur menyebutkan tari 
                        saman di Aceh didirikan dan dikembangkan oleh Syekh Saman, seorang ulama yang 
                        berasal dari Gayo di Aceh Tenggara. Tari saman ditetapkan UNESCO sebagai Daftar 
                        Representatif Budaya Takbenda Warisan Manusia dalam Sidang ke-6 Komite Antar-Pemerintah 
                        untuk Pelindungan Warisan Budaya Tak benda UNESCO di Bali, 24 November 2011."

                text2="Pertunjukan Saman kulit telah diakui oleh UNESCO pada tanggal 7 November 
                        Tari Saman merupakan salah satu media untuk pencapaian pesan (dakwah). 
                        Tarian ini mencerminkan pendidikan, keagamaan, sopan santun, kepahlawanan, 
                        kekompakan dan kebersamaan. Sebelum saman dimulai yaitu sebagai mukaddimah 
                        atau pembukaan, tampil seorang tua cerdik pandai atau pemuka adat untuk 
                        mewakili masyarakat setempat (keketar) atau nasihat-nasihat yang berguna 
                        kepada para pemain dan penonton. Lagu dan syair pengungkapannya secara 
                        bersama dan berkesinambungan, pemainnya terdiri dari pria-pria yang masih 
                        muda-muda dengan memakai pakaian adat. Penyajian tarian tersebut dapat 
                        juga dipentaskan, dipertandingkan antara grup tamu dengan grup sepangkalan 
                        (dua grup). Penilaian dititik beratkan pada kemampuan masing-masing grup 
                        dalam mengikuti gerak, tari dan lagu (syair) yang disajikan oleh pihak lawan."
                to="https://id.wikipedia.org/wiki/Tari_Saman"
                />
        </div>
    )
}
