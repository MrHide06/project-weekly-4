import React from 'react'
import Isi from './Isi'
import Images from '../../images/wayang-kulit.jpg'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Wayang() {
    return (
        <div>
            <Jumbotron fluid className="jumbotronWayang darkenImage">
                <Container className="containerWayang">
                    <h1 className="h1Wayang">Wayang Kulit</h1>
                    <p className="pWayang">
                        Saturday, Apr 10, 2020
                    </p>
                </Container>
            </Jumbotron>
            <Isi 
                text1="Wayang kulit adalah seni tradisional Indonesia 
                        yang terutama berkembang di Jawa. Wayang berasal 
                        dari kata Ma Hyang yang artinya menuju kepada roh spiritual, 
                        dewa, atau Tuhan Yang Maha Esa. Ada juga yang mengartikan 
                        adalah istilah bahasa Jawa yang bermakna bayangan, 
                        hal ini disebabkan karena penonton juga bisa menonton wayang 
                        dari belakang kelir atau hanya bayangannya saja. Wayang kulit 
                        dimainkan oleh seorang dalang yang juga menjadi narator dialog 
                        tokoh-tokoh wayang, dengan diiringi oleh musik gamelan yang 
                        dimainkan sekelompok nayaga dan tembang yang dinyanyikan oleh 
                        para pesinden. Dalang memainkan wayang kulit di balik kelir, 
                        yaitu layar yang terbuat dari kain putih, sementara di belakangnya 
                        disorotkan lampu listrik atau lampu minyak (blencong), sehingga 
                        para penonton yang berada di sisi lain dari layar dapat melihat 
                        bayangan wayang yang jatuh ke kelir. Untuk dapat memahami cerita 
                        wayang (lakon), penonton harus memiliki pengetahuan akan tokoh-tokoh 
                        wayang yang bayangannya tampil di layar."
                text2="Pertunjukan wayang kulit telah diakui oleh UNESCO pada tanggal 7 November 
                        2003, sebagai karya kebudayaan yang mengagumkan dalam bidang cerita narasi 
                        dan warisan yang indah dan berharga (Masterpiece of Oral and Intangible 
                        eritage of Humanity). Wayang kulit lebih populer di Jawa bagian tengah dan 
                        timur, sedangkan wayang golek lebih sering dimainkan di Jawa Barat."
                to="https://id.wikipedia.org/wiki/Wayang_kulit"
                        />
        </div>
    )
}
