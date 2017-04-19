import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Card, CardHeader, CardText} from 'material-ui/Card'

import HomepageForm from './form'
import assets from './assets'
import './homepage.css'

export default class App extends Component {
  render() {
    return (
      <Grid className="homepage-container" fluid>
        <Row className="row-fluid homepage-content">
          <Col className="col-fluid col-homepage" md={6} sm={6} xs={12}>
            <img className="img-homepage" src={assets.beaglebox} alt={"BeagleBox logo"} />
          </Col>
          <Col className="col-fluid col-homepage" md={6} sm={6} xs={12}>
            <Card className="homepage-card-container">
              <CardHeader
                className="homepage-card-title"
                title="Seja bem-vindo"
                showExpandableButton={false}
                initiallyExpanded={true} />
              <CardText>
                <HomepageForm />
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}
