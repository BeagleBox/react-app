import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'

import assets from './assets'
import './not-found.css'

export default class NotFound extends Component {
  render() {
    return (
      <Grid className="not-found-container" fluid>
        <Row className="row-fluid">
          <Col className="col-fluid col-img-not-found" md={12} sm={12} xs={12}>
            <img className="img-not-found" src={assets.notFound} alt={"Não encontrada"} />
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <RaisedButton
              label='Voltar ao início'
              backgroundColor='#B48850'
              containerElement={<Link to="inicio" />} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
