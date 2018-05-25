import React, { Component } from 'react'

class Bio extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.fullName}</h1>
                <h2>Cohort: {this.props.cohort}</h2>
                <h2>Address: {this.props.address}</h2>
                <h2>Car: {this.props.car}</h2>
                <h2>Pet: {this.props.pet}</h2>
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