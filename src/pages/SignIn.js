import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SignIn = () => {
    return (
        <div className="container signin">
            <div className="signin">
            <h1>Welcome back !</h1>
            <h4>SIgn into your account again for full access</h4>
            <InputGroup className="mb-3 input-signin">
                <FormControl
                    placeholder="Enter Your Email..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    
                />
                <InputGroup.Append>
                    <Button variant="info" as={Link} to="/">
                        Send Login Link
                    </Button>
                </InputGroup.Append>
            </InputGroup>
            </div>
        </div>
    )
}
export default SignIn
