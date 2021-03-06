import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import * as validation from './validation'
import './homepage-form.css'

export default class HomepageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    const { email, password } = this.state;

    if(!validation.validateEmail(email)) {
      this.setState({emailError: "Endereço de e-mail inválido"})
    } else {
      this.setState({emailError: ""})
    }

    this.props.doUserLogin(email, password)
  }

  render() {
    return (
      <Row className="row-fluid form-container" around="xs">
        <Col className="col-fluid form-content" xs={12}>
          <TextField
            name="email"
            className="form-content-field"
            floatingLabelText="E-mail"
            floatingLabelStyle={{color: '#696969'}}
            type="email"
            errorText={this.state.emailError}
            onChange={this.handleInputChange}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                this.handleSubmit();
                ev.preventDefault();
              }
            }} />
        </Col>
        <Col className="col-fluid form-content" xs={12}>
          <TextField
            name="password"
            className="form-content-field"
            floatingLabelText="Senha"
            floatingLabelStyle={{color: '#696969'}}
            type="password"
            errorText={this.state.passwordError}
            onChange={this.handleInputChange}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                this.handleSubmit();
                ev.preventDefault();
              }
            }} />
        </Col>
        {this.props.logInError &&
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <p className="logIn-error-message">E-mail ou senha incorretos</p>
          </Col>
        }
        <Col className="col-fluid form-content" xs={12}>
          <FlatButton
            className="btn-form-signin"
            label="Entrar"
            backgroundColor="#8DCC3D"
            hoverColor="#8DCC3D"
            onTouchTap={this.handleSubmit} />
        </Col>
      </Row>
    );
  }
}
