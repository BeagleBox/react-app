import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import assets from '../assets'

export default class AdminWelcome extends Component {
  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid col-image" md={12} sm={12} xs={12}>
          <img className="img-admin" src={assets.admin} alt="Ícone de Adminstrador" />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h1>Bem-vindo(a)</h1>
          <h2>Área exclusiva para administração</h2>
        </Col>
      </Row>
    );
  }
}
