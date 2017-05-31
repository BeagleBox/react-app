import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import assets from '../../assets'
import SelectField from  'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export default class Location extends Component {
  componentWillMount() {
    this.props.doGetAllHotspots()
  }

  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid col-request col-image" md={12} sm={12} xs={12}>
          <img className="img-request" src={assets.sameLocation} alt={"Localização Igual"} />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h3 className="request-title">O carrinho já está neste ambiente</h3>
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
            onChange={(event, index, value) => this.props.doSelectDestinationLocation(value)}
            errorText={this.props.destinationError} >
            { this.props.location.map(item => (
                <MenuItem key={item.id} value={item.id} primaryText={item.departament_name} />
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
}
