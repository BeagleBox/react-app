import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import TextField from 'material-ui/TextField'
import assets from '../assets'

import './receive-open-key.css'

export default class OpenKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessKey: Math.floor(1000 + Math.random() * 9000),
    }
  }

  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h3 className="receive-title">Chave de acesso</h3>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <TextField
            name="location"
            className="key-field"
            value={this.state.accessKey}
            disabled={true}
            underlineShow={false} />
        </Col>
        <Col className="col-fluid col-receive col-image" md={12} sm={12} xs={12}>
          <img className="img-receive" src={assets.receive} alt={"Receber Carga"} />
        </Col>
      </Row>
    );
  }
}
