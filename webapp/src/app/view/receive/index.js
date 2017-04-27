import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import OpenKey from './open-key'
import CheckList from './checklist'

import './receive.css'

export default class Receive extends Component {
  handleReceive = () => {

  }

  render() {
    return (
      <Grid className="receive-container" fluid>
        <Row className="row-fluid">
          <Col className="col-fluid" md={6} sm={12} xs={12}>
            <OpenKey />
          </Col>
          <Col className="col-fluid" md={6} sm={12} xs={12}>
            <CheckList />
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <RaisedButton
              className="btn-receive-car"
              label="Recebido"
              secondary={true}
              onTouchTap={this.handleReceive} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
