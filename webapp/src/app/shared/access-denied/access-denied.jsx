import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'

import assets from './assets'
import './access-denied.css'

export default class AccessDenied extends Component {
  render() {
    return (
      <Grid className="access-denied-container" fluid>
        <Row className="row-fluid">
          <Col className="col-fluid col-img-access-denied" md={12} sm={12} xs={12}>
            <img className="img-access-denied" src={assets.accessDenied} alt={"Acesso negado"} />
          </Col>
          <Col className="col-fluid col-img-access-denied" md={12} sm={12} xs={12}>
            <h1>Acesso Negado</h1>
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <RaisedButton
              className="btn-back-home"
              label='Voltar ao início'
              backgroundColor="#C74343"
              containerElement={<Link to="inicio" />} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
