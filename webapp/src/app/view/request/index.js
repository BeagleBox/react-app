import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import assets from '../homepage/assets'
import DifferentLocation from './different-location'

import './request.css'

export default class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      samePlace: false,
    }
  }

  render() {
    return (
      <Grid className="request-container" fluid>
        <Row className="row-fluid request-content">
          <Col className="col-fluid col-request" md={12} sm={12} xs={12}>
            {!this.state.samePlace &&
              <img className="img-request" src={assets.beaglebox} alt={"BeagleBox logo"} />
            }
          </Col>
          <Col className="col-fluid col-request" md={12} sm={12} xs={12}>
            {!this.state.samePlace &&
              <DifferentLocation />
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}
