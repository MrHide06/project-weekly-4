import React from 'react'
import '../../App.scss'
import { Jumbotron, Container, Button, Media, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profile from '../../images/profile2.png'
import Share from './Share'


const Wakatobi = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbrotonWakatobi">
                    <Container className="containerWakatobi">
                        <h1 className="h1Wakatobi">Taman Nasional Wakatobi</h1>
                        <p className="pWakatobi">
                        Saturday, Apr 10, 2020
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="containerWaka">
                <p>
                Taman Nasional Wakatobi merupakan salah satu dari 50 taman nasional di Indonesia, yang 
                terletak di kabupaten Wakatobi, Sulawesi Tenggara. Taman nasional ini ditetapkan pada 
                tahun 2002, dengan total area 1,39 juta ha, menyangkut keanekaragaman hayati laut, skala 
                dan kondisi karang; yang menempati salah satu posisi prioritas tertinggi dari konservasi 
                laut di Indonesia. Kedalaman air di taman nasional ini bervariasi, bagian terdalam mencapai 
                1.044 meter di bawah permukaan air laut.
                </p>
                <p>
                Di taman ini terdapat panorama keindahan alam bawah laut yang memiliki 25 buah gugusan 
                terumbu karang. Gugusan terumbu karang dapat dijumpai sekitar 112 jenis dari 13 famili 
                yang terletak pada 25 titik di sepanjang 600 km garis pantai. Bagi para wisatawan yang menyukai 
                keindahan alam bawah laut dapat melakukan beberapa kegiatan di Taman Nasional Wakatobi, 
                seperti menyelam, snorkeling dan berenang untuk melihat gugusan terumbu karang yang indah 
                dan berbagai hewan bawah laut dan juga menyaksikan berbagai kebudayaan masyarakat setempat.
                </p>
                <Share href="https://id.wikipedia.org/wiki/Taman_Nasional_Wakatobi" />
                </Container>
                
            </div>
        </div>
    )
}
export default Wakatobi