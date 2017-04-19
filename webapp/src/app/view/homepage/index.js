import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Card, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import assets from './assets'
import './homepage.css'

export default class App extends Component {
  render() {
    return (
      <Grid className="homepage-container" fluid>
        <Row className="row-fluid">
          <Col className="col-fluid home-col" md={6} sm={6} xs={12}>
            <img className="beaglebox-main-img" src={assets.beaglebox} alt={"BeagleBox logo"} />
          </Col>
          <Col className="col-fluid home-col" md={6} sm={6} xs={12}>
            <Card className="login-card-container">
              <CardHeader
                className="login-card-title"
                title="Seja bem-vindo"
                showExpandableButton={false}
                initiallyExpanded={true}
              />
              <CardText>
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
                      className="btn-signin"
                      label="Entrar"
                      backgroundColor="#8DCC3D"
                      hoverColor="#8DCC3D"
                      onTouchTap={this.handleSubmit} />
                  </Col>
                </Row>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}
