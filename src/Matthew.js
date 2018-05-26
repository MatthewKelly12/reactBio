import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Bio from './Bio';
import "./Person.css"


class Matthew extends Component {
    constructor(props) {
      super(props)

      this.state = {
        fullName: "Matthew Kelly",
        cohort: "Cohort 25",
        address: "21 Vaughn's Gap Rd.",
        car: "Honda CRV",
        pet: "My dog Karma"
      }

    }
    render() {
      return (
        <div class="person">
          <Bio fullName={this.state.fullName}
               cohort={this.state.cohort}
               address={this.state.address}
               car={this.state.car}
               pet={this.state.pet}/>
        </div>
      );
    };


}

export default Matthew;