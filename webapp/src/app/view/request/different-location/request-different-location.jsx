import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'

import * as validation from '../validation'
import './request-different-location.css'

export default class RequestDifferentLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originError: '',
      location: this.handleLocationData(),
    }
  }

  handleRequest = () => {
    const origin = this.props.origin;

    if(validation.isEmpty(origin)) {
      this.setState({originError: "Este campo não pode estar em branco"})
    } else {
      this.setState({originError: ""})
      this.props.doRequestCar()
    }
  }

  handleLocationData = () => {
    const items = this.props.location
    var titles = []

    for(var i = 0; i < items.length; i++) {
      titles.push(items[i].name)
    }

    return titles
  }

  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h3 className="title-different-location">O carrinho não está neste ambiente!</h3>
          <h3>Solicitar BeagleBox</h3>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <AutoComplete
              name="location"
              className="form-content-field"
              floatingLabelText="Minha localização"
              floatingLabelStyle={{color: '#696969'}}
              dataSource={this.state.location}
              filter={AutoComplete.caseInsensitiveFilter}
              menuStyle={{maxHeight: 120, overflowY: 'auto'}}
              onNewRequest={(_, value) => this.props.doSelectOriginLocation(this.state.location[value])}
              errorText={this.state.originError} />
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <RaisedButton
              className="btn-request-car"
              label="Solicitar"
              backgroundColor="#7496C4"
              onTouchTap={this.handleRequest} />
          </Col>
        </Col>
      </Row>
    );
  }
}
