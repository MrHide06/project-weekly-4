import React, { Component } from 'react'
import axios from 'axios'
import PokemonChild from './ApiChild'
import { Container } from 'react-bootstrap'

class Pokemon extends Component {
    constructor(){
        super();
        this.state = {
            imgs: [],
        };
    }
    componentDidMount() {
        axios
            .get(
                'https://digimon-api.herokuapp.com/api/digimon'
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
                <Container classname="Pokemon">
                    {this.state.imgs.map((item, index) => (
                        <div className="main-content-area" key={index}>
                            <div className="container post-listing col-md-3">
                                <div className="row is-flex">
                                    <div className="col text-center">
                                        <PokemonChild
                                             photo={item.img} title={item.name} 
                                            // fcd91ac18767190e0a6c9a802d165271
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
export default Pokemon