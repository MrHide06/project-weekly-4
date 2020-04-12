import React, { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Modal, InputGroup, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../App.scss'
import { Link } from 'react-router-dom'
import logo from '../images/logo2.png'

library.add(faSearch);
export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            
            <Navbar collapseOnSelect expand="md" variant="light">
                <Navbar.Brand className="pl-5" href="#home">
                    <img
                        src={logo}
                        width="120"
                        height="55"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/tagarchive">Tag Archive</Nav.Link>
                        <Nav.Link as={Link} to="/authorarchive">Author Archive</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link href="#features">Error Page</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="px-3" variant="outline-dark" size="sm" style={{ marginRight: '3px', border: "1px solid #ccc", color:"#999"}} as={Link} to="/signin">Sign In</Button>
                        <Button className="px-3 subsButton" variant="info" size="sm" as={Link} to="/subscribe">Subscribe</Button>
                        <span className="searchIcon pr-5" id="search-button">
                            <FontAwesomeIcon icon={faSearch} className="fontIcon" onClick={handleShow} />
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Type to Search..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="info">
                            <FontAwesomeIcon icon={faSearch} onClick={handleClose} />
                        </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal> 
        </div>
    )
}
