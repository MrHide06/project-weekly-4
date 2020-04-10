import React, { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Modal, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../App.scss'
import { Link } from 'react-router-dom'

library.add(faSearch);
export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Navbar.Brand href="#home">Polar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="#pricing">Tag Archive</Nav.Link>
                        <Nav.Link href="#features">Author Archive</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#features">Contact</Nav.Link>
                        <Nav.Link href="#features">Error Page</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-dark" size="sm" style={{ marginRight: '3px'}} as={Link} to="/signin">Sign In</Button>
                        <Button variant="info" size="sm">Subscribe</Button>
                        <span className="searchIcon" id="search-button">
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
