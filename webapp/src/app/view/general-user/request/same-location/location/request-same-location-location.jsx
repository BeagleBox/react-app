import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import assets from '../../assets'
import SelectField from  'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import * as validation from '../../validation'

export default class Location extends Component {
  componentWillMount() {
    this.props.doGetAllHotspots()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.destination !== this.props.destination) {
      this.props.doGetSpecificRecipients(nextProps.destination)
    }
  }

  handleInputChange = (value) => {
    const origin = this.props.origin;

    if(!validation.isEmpty(origin) && !validation.isEmpty(value)) {
      if(validation.isEqual(origin, value)) {
        this.props.setDestinationError("O destino não pode ser o mesmo que a origem")
      } else {
        this.props.setDestinationError("")
      }
    }
    this.props.doSelectDestinationLocation(value)
  }

  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid col-request col-image" md={12} sm={12} xs={12}>
          <img className="img-request" src={assets.sameLocation} alt={"Localização Igual"} />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <SelectField
            floatingLabelText="Minha localização"
            className="form-content-select"
            value={this.props.origin}
            onChange={(event, index, value) => this.props.doSelectOriginLocation(value)}
            errorText={this.props.originError} >
            { this.props.location.map(item => (
                <MenuItem key={item.id} value={item.id} primaryText={item.departament_name} />
              )) }
          </SelectField>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <SelectField
            floatingLabelText="Destino final"
            className="form-content-select"
            value={this.props.destination}
            onChange={(event, index, value) => this.handleInputChange(value)}
            errorText={this.props.destinationError} >
            { this.props.location.map(item => (
                <MenuItem key={item.id} value={item.id} primaryText={item.departament_name} />
              )) }
          </SelectField>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <SelectField
            floatingLabelText="Destinatário final"
            className="form-content-select"
            value={this.props.recipient}
            onChange={(event, index, value) => this.props.doSelectRecipient(value)}
            errorText={this.props.recipientError} >
            { this.props.recipients.map(item => (
                <MenuItem key={item.id} value={item.id} primaryText={item.employee_name} />
              )) }
          </SelectField>
        </Col>
      </Row>
    );
  }
}

Location.PropTypes = {
  originError: React.PropTypes.string,
  destinationError: React.PropTypes.string,
  recipientError: React.PropTypes.string,
  setDestinationError: React.PropTypes.func,
}
