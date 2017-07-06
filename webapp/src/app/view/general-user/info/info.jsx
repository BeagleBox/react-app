import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Iframe from 'react-iframe'

import {Card, CardHeader, CardText} from 'material-ui/Card'

import assets from './assets'
import './info.css'

export default class GeneralInformation extends Component {
  render() {
    return (
      <Grid className="info-container" fluid>
        <Row className="row-fluid info-content">
          <Col className="col-fluid col-info col-camera" md={6} sm={12} xs={12}>
            <Card className="card-camera">
              <Iframe
                className="iframe-camera"
                url="http://www.youtube.com/embed/TOM6lDQ_2BE?autoplay=1"
                position="absolute"
                width="545px"
                height="410px"
                allowFullScreen />
            </Card>
          </Col>
          <Col className="col-fluid col-info" md={6} sm={12} xs={12}>
            <Row className="row-fluid extra-padding">
              <Col className="col-fluid" md={6} sm={6} xs={12}>
                <Card className="card-info card-blue" initiallyExpanded={true} >
                  <CardHeader
                    title="Nível de Bateria"
                    actAsExpander={true}
                    showExpandableButton={true} />
                  <CardText expandable={true}>
                    <Row className="row-fluid row-center">
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <img src={assets.battery} alt="Ícone da bateria" />
                      </Col>
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <h1>75%</h1>
                      </Col>
                    </Row>
                  </CardText>
                </Card>
              </Col>
              <Col className="col-fluid" md={6} sm={6} xs={12}>
                <Card className="card-info card-salmon" initiallyExpanded={true} >
                  <CardHeader
                    title="Tempo restante"
                    actAsExpander={true}
                    showExpandableButton={true} />
                  <CardText expandable={true}>
                    <Row className="row-fluid row-center">
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <img src={assets.timeLeft} alt="Ícone de tempo restante" />
                      </Col>
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <h1>1h 30min</h1>
                      </Col>
                    </Row>
                  </CardText>
                </Card>
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                <Card className="card-info card-green" initiallyExpanded={true} >
                  <CardHeader
                    title="Peso útil atual"
                    actAsExpander={true}
                    showExpandableButton={true} />
                  <CardText expandable={true}>
                    <Row className="row-fluid row-center">
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <img src={assets.weight} alt="Ícone do peso útil" />
                      </Col>
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <h1>15 kg</h1>
                      </Col>
                    </Row>
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
