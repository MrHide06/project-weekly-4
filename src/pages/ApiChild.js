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
                </Card.Body>
            </Card>
        </>
    )
}
export default HomeChild