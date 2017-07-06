import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import SelectField from  'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import * as validation from '../validation'
import './request-different-location.css'

export default class RequestDifferentLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originError: '',
    }
  }

  componentWillMount() {
    this.props.doGetAllHotspots()
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

  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h3>Solicitar BeagleBox</h3>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <SelectField
              floatingLabelText="Minha localização"
              className="form-content-select"
              value={this.props.origin}
              onChange={(event, index, value) => this.props.doSelectOriginLocation(value)}
              errorText={this.state.originError} >
              { this.props.location.map(item => (
                  <MenuItem key={item.id} value={item.id} primaryText={item.departament_name} />
                )) }
            </SelectField>

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
