import React, { Component } from 'react'
import "./Bio.css"
import "./Name.css"
import "./Cohort.css"
import "./Address.css"
import "./Car.css"
import "./Pet.css"



class Bio extends Component {
    render() {
        return (
            <div class="bio">
                <h1 class="name">Name: {this.props.fullName}</h1>
                <h2 class="cohort">Cohort: {this.props.cohort}</h2>
                <h2 class="address">Address: {this.props.address}</h2>
                <h2 class="car">Car: {this.props.car}</h2>
                <h2 class="pet">Pet: {this.props.pet}</h2>
            </div>
        );
    }
}

export default Bio;

// Your full name
// Your cohort
// Your home address
// The make and model of your favorite vehicle
// The name, and species/breed of your favorite, or ideal, pet