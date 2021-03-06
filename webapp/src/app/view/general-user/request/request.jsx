import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import assets from './assets'
import DifferentLocation from './different-location'
import SameLocation from './same-location'

import './request.css'

export default class Request extends Component {
  render() {
    return (
      <Grid className="request-container" fluid>
        <Row className="row-fluid request-content">
          {!this.props.isSamePlace &&
            <Col className="col-fluid col-request col-image" md={12} sm={12} xs={12}>
              <img className="img-request" src={assets.differentLocation} alt={"Localização Diferente"} />
            </Col>
          }
          <Col className="col-fluid col-request" md={12} sm={12} xs={12}>
            {!this.props.isSamePlace &&
              <DifferentLocation />
            }
            {this.props.isSamePlace &&
              <SameLocation />
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}
