import React from 'react'
import { Container } from 'react-bootstrap'
import TagSosmed from './TagSosmed'

const Isi = (props) => {
    return (
        <div>
            <Container className="containerIsi">
                <p>{props.text1}</p>
                <h6>{props.paragraf}</h6>
                <p>{props.text2}</p>
                <TagSosmed href={props.to} />
            </Container>
        </div>
    )
}
export default Isi
