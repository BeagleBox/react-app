import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import AutoComplete from 'material-ui/AutoComplete'

import './request-different-location.css'

export default class RequestDifferentLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ['Secretaria', 'Biblioteca', 'Enfermaria', 'Sala I1']
    }
  }

  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <p>O carrinho não está neste ambiente</p>
          <p>Solicitar BeagleBox</p>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <AutoComplete
            name="location"
            className="form-content-field"
            floatingLabelText="Minha localização"
            floatingLabelStyle={{color: '#696969'}}
            dataSource={this.state.location} />
        </Col>
      </Row>
    );
  }
}
