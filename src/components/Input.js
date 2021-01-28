import React from 'react';
import { capitalize } from '../utils';

export default class Input extends React.Component {
  state = {
    inputValue: '',
    err: null
  }
  onInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
    this.props.handleChange(value, e.target.name);
  };
  onBlur = (e) => {
    const err = this.props.validate(this.state.inputValue);
    this.setState({ err });
    this.props.handleErr(e.target.name, err);
  }

  render() {
    const { name, style, placeholder, type, inputClass } = this.props;
    return (
      <div>
        <div className="d-flex justify-content-between">
          <label htmlFor={name}>{capitalize(name)}</label>
          <div className="error">{this.state.err}</div>
        </div>
        <div className={inputClass}>
          <input
            style={style}
            type={type}
            name={name}
            id={name}
            onChange={this.onInputChange}
            onBlur={this.onBlur}
            value={this.state.inputValue}
            placeholder={placeholder} />
          {name === 'password' ? <a href="/" className="password-link default-link">Forgot password?</a> : null}
        </div>
      </div>
    )
  }
}