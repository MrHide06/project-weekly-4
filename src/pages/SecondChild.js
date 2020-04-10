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
            <Card className="card">
                <CardImg variant="top" src={props.photo} />
                <Card.Body className="cardBody">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text as={Link} to={props.link} className="linkediting" style={{textDecoration: 'none'}}>
                        {props.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.date}</small>
               </Card.Footer>
            </Card>
        </>
    )
}
export default HomeChild