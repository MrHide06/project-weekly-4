import React from 'react'
import Isi from './Isi'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Piring() {
    return (
        <div>
            <Jumbotron fluid className="jumbotronPiring">
                <Container className="containerPiring">
                    <h1 className="h1Piring">Tari Piring</h1>
                    <p className="pPiring">
                        Saturday, Apr 10, 2020
                    </p>
                </Container>
            </Jumbotron>
            <Isi 
                text1="Tari piring atau tari piriang dalam bahasa Minangkabau adalah tarian tradisional 
                        Minangkabau yang melibatkan atraksi piring. Para penari mengayunkan piring mengikuti 
                        gerakan-gerakan cepat yang teratur, tanpa terlepas dari genggaman tangan. 
                        Gerakannya diambil dari langkah-langkah dalam silat Minangkabau atau silek. 
                        Secara tradisional, tari ini berasal dari Solok, Sumatra Barat dan secara umum 
                        menjadi simbol masyarakat Minangkabau."

                text2="Pada awalnya, tari ini merupakan ritual ucapan rasa syukur masyarakat setempat kepada 
                        dewa-dewa setelah mendapatkan hasil panen yang melimpah ruah. Ritual dilakukan dengan 
                        membawa sesaji dalam bentuk makanan yang diletakkan di dalam piring sembari melangkah 
                        dengan gerakan yang dinamis. Setelah masuknya agama Islam ke Minangkabau, tradisi tari 
                        piring tidak lagi digunakan sebagai ritual ucapan rasa syukur kepada dewa-dewa. Akan 
                        tetapi, tari tersebut digunakan sebagai sarana hiburan bagi masyarakat banyak yang 
                        ditampilkan pada acara-acara keramaian"
                to="https://id.wikipedia.org/wiki/Tari_piring"
                />
        </div>
    )
}
