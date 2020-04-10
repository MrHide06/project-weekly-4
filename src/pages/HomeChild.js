import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const HomeChild = (props) => {
    return (
        <>
            <Card className="card">
                <CardImg variant="top" height={200} src={props.photo} />
                <Card.Body className="cardBody">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text as={Link} to={props.link} className="linkediting" style={{textDecoration: 'none'}}>
                        {props.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.category}</small>
               </Card.Footer>
            </Card>
        </>
    )
}
export default HomeChild