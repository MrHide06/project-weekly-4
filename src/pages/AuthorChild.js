import React from 'react'

import '../App.scss'

import { Container, Figure } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'


const Profile = (props) => {
    return(
        <div>
                <Figure className="figure">
                    <FigureImage thumbnail className="figImage"
                        src={props.src}
                    />
                    <FigureCaption className="text-center"> 
                        {props.text}
                    </FigureCaption>
                </Figure>
        </div>
    )
}

export default Profile;