import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import assets from './assets'
import './admin.css'

export default class Administrator extends Component {
  render() {
    return (
      <Grid className="admin-container" fluid>
        <Row className="row-fluid admin-content">
          <Col className="col-fluid col-image" md={12} sm={12} xs={12}>
            <img className="img-admin" src={assets.admin} alt="Ícone de Adminstrador" />
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <h1>Bem-vindo(a)</h1>
            <h2>Área exclusiva para administração</h2>
          </Col>
        </Row>
      </Grid>
    );
  }
}
