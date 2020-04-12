import React from 'react'
import { Card, CardImg, Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FigureCaption from 'react-bootstrap/FigureCaption'
import FigureImage from 'react-bootstrap/FigureImage'


const HomeChild = (props) => {
    return (
        <>
            <Card className="card">
                <CardImg variant="top" height={200} src={props.photo} />
                <Card.Body className="cardBody">
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
            </Card>
            {/* <Figure>
                <FigureImage thumbnail
                    src={props.photo}
                    height={200}
                />
                <FigureCaption>
                    {props.title}
                </FigureCaption>
            </Figure> */}
        </>
    )
}
export default HomeChild;