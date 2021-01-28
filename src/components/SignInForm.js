import React from 'react';
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';
import Input from './Input';
import { validateEmail, validatePassword } from '../utils';

const colors = {
  blue: '#065BEA',
  green: '#6FCF97',
  red: '#FF4B26'
}
const Button  = styled.button`
  position: absolute;
  border-radius: 8px;
  border: none;
  width: 100%;
  height: 54px;
  color: white;
  font-size: 16px;
  z-index: 10;
  animation: ${props => props.animationDuration} ${keyframes`${fadeIn}`} infinite;
  &:active {
    .default {
      background: #065BEA;
    }
    .button-shadow {
      background: rgba(6, 91, 234, 0.5);
    }
  }
  &.disabled {
    background: #C6D0E0;
  }
  &.default {
    background: #065BEA;
  }
`;
export default class SignInForm extends React.Component {
  state = {
    signInData: {
      disabled: true,
      emailColor: colors.blue,
      passwordColor: colors.blue
    }
  }
  handleError = (inputName, err) => {
    const updatedSignInData = {
      disabled: true,
      [`${inputName}Err`]: err
    }
    if (!updatedSignInData[`${inputName}Err`]) {
      updatedSignInData[`${inputName}Color`] = colors.green;
    } else {
      updatedSignInData[`${inputName}Color`] = colors.red;
    }
    if (
      (!updatedSignInData.emailErr && !updatedSignInData.emailErr)
      && (this.state.signInData.email && this.state.signInData.password)) {
      updatedSignInData.disabled = false;
    } else {
      updatedSignInData.disabled = true;
    }
    this.setState({
      signInData: {
        ...this.state.signInData,
        ...updatedSignInData
      }
    })
  }
  handleInputChange = (value, inputName) => {
    this.setState({
      signInData: {
        ...this.state.signInData,
        [inputName]: value,
      }
    });
  }
  render() {
    return (
      <div className="sign-in-form">
        <header className="sign-in-form-header">
          <h1>Sign in</h1>
          <p>Don’t have an Xcellerate account? <a href="/">Sign up now</a></p>
        </header>
        <form>
          <Input
            type="email"
            style={{ 'borderColor': this.state.signInData.emailColor }}
            name="email"
            handleChange={this.handleInputChange}
            handleErr={this.handleError}
            validate={validateEmail} />
          <Input
            inputClass="password-container"
            type="password"
            style={{ 'borderColor': this.state.signInData.passwordColor }}
            name="password"
            handleChange={this.handleInputChange}
            handleErr={this.handleError}
            validate={validatePassword} />
          <div className="button-container">
            <Button
              animationDuration={this.state.signInData.disabled ? '0s' : '5s'}
              type="button"
              className={this.state.signInData.disabled ? "disabled" : "default"}
              disabled={this.state.signInData.disabled}>Sign in</Button>
            <div className={this.state.signInData.disabled ? "" : "button-shadow"}></div>
          </div>
        </form>
      </div>
    )
  }
}