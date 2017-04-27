import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import assets from './assets'
import DifferentLocation from './different-location'
import SameLocation from './same-location'

import './request.css'

export default class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      samePlace: true,
    }
  }

  render() {
    return (
      <Grid className="request-container" fluid>
        <Row className="row-fluid request-content">
          {!this.state.samePlace &&
            <Col className="col-fluid col-request col-image" md={12} sm={12} xs={12}>
              <img className="img-request" src={assets.differentLocation} alt={"Localização Diferente"} />
            </Col>
          }
          <Col className="col-fluid col-request" md={12} sm={12} xs={12}>
            {!this.state.samePlace &&
              <DifferentLocation />
            }
            {this.state.samePlace &&
              <SameLocation />
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}
