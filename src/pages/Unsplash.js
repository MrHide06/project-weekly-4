import React, { Component } from 'react'
import axios from 'axios'
import UnsplashChild from './ApiChild'
import { Container } from 'react-bootstrap'

class Unsplash extends Component {
    constructor(){
        super();
        this.state = {
            imgs: [],
        };
    }
    componentDidMount() {
        axios
            .get(
                "https://api.unsplash.com/photos/?client_id=U7R7xu3xiyfPEPxfPy6CibkBicYeLBg_1LYRE0Or0hU"
            )
            .then((data) => {
                this.setState({ imgs: data.data });
            })
            .catch((err) => {
                console.log("Error happened during fetching", err);
            });
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Unsplash</h1>
                <Container classname="unsplash">
                    {this.state.imgs.map((item, index) => (
                        <div className="main-content-area" key={index}>
                            <div className="container post-listing">
                                <div className="row is-flex">
                                    <div className="col-sm-6 col-md-4 col-xs-12">
                                        <UnsplashChild
                                            photo={item.urls.small} title={item.user.name} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Container>
            </div>
        );
    }
}
export default Unsplash