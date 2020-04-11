import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import photo1 from '../../images/raja-ampat.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../../App.scss'
library.add(faArrowRight)

const AlatMusikChild = (props) => {
    return (
        <>
            <Card className="cardAlatMusik">
                <Card.Img 
                height={150}
                variant="top" src={props.photo} />
                <Card.Body>
                    <Card.Title as={Link} to={props.link} className="linkeditingAlatMusik" style={{textDecoration: 'none'}}>
                        <h4>{props.title}</h4>
                    </Card.Title>
                    <Card.Text as={Link} to={props.link} className="linkeditingAlatMusik" style={{textDecoration: 'none', textAlign: 'justify'}}>
                        {props.text}
                    </Card.Text>
                    <Card.Footer>
                        <small className="text-muted">{props.category}</small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}
export default AlatMusikChild