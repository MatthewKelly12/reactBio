import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Bio from './Bio';

class Jill extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: "Jill Jones",
            cohort: "299",
            address: "242 Future Way",
            car: "Flying Lotus",
            pet: "Talking Squirrel Otis"
        }
    }
    render() {
        return (
            <div>
             <Bio fullName={this.state.fullName}
               cohort={this.state.cohort}
               address={this.state.address}
               car={this.state.car}
               pet={this.state.pet}/>
            </div>
        )
    }
}

export default Jill;