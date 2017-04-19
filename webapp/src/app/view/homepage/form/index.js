import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import './homepage-form.css'

export default class App extends Component {
  render() {
    return (
      <Row className="row-fluid form-container" around="xs">
        <Col className="col-fluid form-content" xs={12}>
          <TextField
            name="email"
            className="form-content-field"
            floatingLabelText="Endereço de e-mail"
            type="email" />
        </Col>
        <Col className="col-fluid form-content" xs={12}>
          <TextField
            name="password"
            className="form-content-field"
            floatingLabelText="Senha"
            type="password" />
        </Col>
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
