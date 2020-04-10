import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import photo1 from '../images/raja-ampat.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../App.scss'
library.add(faArrowRight)

const HomeChild = (props) => {
    return (
        <>
            <Card className="cardTag">
                <Card.Img 
                height={150}
                variant="top" src={props.photo} />
                <Card.Body>
                    <Card.Title rel="bookmark">{props.category}</Card.Title>
                    <Card.Footer>
                        <small className="text-muted">{props.posts}</small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}
export default HomeChild