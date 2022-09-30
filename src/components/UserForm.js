import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonaldetail';
import Confirm from './Confirm';
import Success from './Success'

export default class UserForm extends Component {
  state = {
    step: 1,
    FirstName: '',
    LastName: '',
    Email: '',
    Description: '',
    Bio: '',
    city: ''
  }

  NextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 })
  }

  PrevNext = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 })
  }

  handleChange = input => (e) => {
    this.setState({ [input]: e.target.value })
  }
  render() {
    const { step } = this.state;
    const { FirstName, LastName, Email, Description, Bio, city } = this.state;
    const value = { FirstName, LastName, Email, Description, Bio, city }

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            NextStep={this.NextStep}
            handleChange={this.handleChange}
            value={value}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            NextStep={this.NextStep}    
            PrevNext={this.PrevNext}
            handleChange={this.handleChange}
            value={value}
          />
          );

      case 3:
        return (
          <Confirm
            NextStep={this.NextStep} 
            PrevNext={this.PrevNext}
            value={value}
          />
          );

      case 4:
        return (
          <Success/>
          )

      default:
    }
  }
}
