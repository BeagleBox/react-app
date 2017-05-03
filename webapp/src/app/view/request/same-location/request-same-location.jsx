import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import Location from './location'
import CheckList from './checklist'

import './request-same-location.css'

export default class RequestSameLocation extends Component {
  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={6} sm={12} xs={12}>
          <Location />
        </Col>
        <Col className="col-fluid" md={6} sm={12} xs={12}>
          <CheckList />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <RaisedButton
            className="btn-request-car"
            label="Enviar"
            primary={true}
            onTouchTap={() => this.doSendCar(this.props.origin, this.props.destination, this.props.loadList)} />
        </Col>
      </Row>
    );
  }
}
