import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'

import './request-different-location.css'

export default class RequestDifferentLocation extends Component {
  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h3 className="request-title">O carrinho não está neste ambiente!</h3>
          <h3>Solicitar BeagleBox</h3>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <AutoComplete
              name="location"
              className="form-content-field"
              floatingLabelText="Minha localização"
              floatingLabelStyle={{color: '#696969'}}
              dataSource={this.props.location}
              filter={AutoComplete.caseInsensitiveFilter}
              menuStyle={{maxHeight: 120, overflowY: 'auto'}}
              onNewRequest={(_, value) => this.props.doSelectOriginLocation(value)} />
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <RaisedButton
              className="btn-request-car"
              label="Solicitar"
              primary={true}
              onTouchTap={() => this.props.doRequestCar()} />
          </Col>
        </Col>
      </Row>
    );
  }
}
