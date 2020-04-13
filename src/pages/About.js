import React from 'react'
import { Jumbotron, Container, Row } from 'react-bootstrap'


const About = () => {
    return (
        <div>
            <div>
                <Jumbotron fluid className="jumbotronAbout">
                    <Container>
                        <h1 className="h1Tag pt-5">About</h1>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Container className="col-md-4">
                    <h2>Pesona Indonesia</h2>
                    <p>Website ini berisi tentang Kebudayaan, Hewan Epidemik, Tempat Wisata, Taman Nasional, dan Alat Musik yang ada di Indonesia.</p>
                    <br/>
                    <h2>Some feature</h2>
                    <p>Clean and modern design.<br/>
                    Minimal and reader friendly.<br/>
                    100% responsive.<br/>
                    supports image logo.<br/>
                    Previous and next post link in single post view.<br/>
                    Supports inbuilt navigation system.<br/>
                    Blog Cover and blog description.<br/>
                    Tag image and tag description.<br/>
                    </p>
                </Container>
            </div>
        </div>
    )
}
export default About;
