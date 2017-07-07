import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Iframe from 'react-iframe'

import {Card, CardHeader, CardText} from 'material-ui/Card'

import NextIcon from 'material-ui/svg-icons/image/navigate-next'
import OriginIcon from 'material-ui/svg-icons/content/flag'
import DestinationIcon from 'material-ui/svg-icons/action/check-circle'
import CarIcon from 'material-ui/svg-icons/maps/directions-car'

import assets from './assets'
import './info.css'

export default class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNext: false,
      secondNext: false,
      thirdNext: false,
      forthNext: false,
      fifthNext: false,
      sixthNext: false,
      status: 'Não há Entregas'
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.props.doUpdateBatteryStatus(), 1000);
    this.interval = setInterval(() => this.props.doGetCurrentDelivery(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.statusDelivery === '') {
      this.setState({ status: "Não Há Entregas" })
    }
    else if(nextProps.actualStep !== this.props.actualStep) {
      let actualPercent = nextProps.actualStep/nextProps.totalStep

      if(actualPercent > 0 && actualPercent <= 0.1667) {
        this.setState({ firstNext: true })
      } if(actualPercent > 0.1667 && actualPercent <= 0.3334) {
        this.setState({ firstNext:true, secondNext: true })
      } if(actualPercent > 0.3334 && actualPercent <= 0.5) {
        this.setState({ firstNext:true, secondNext: true, thirdNext: true })
      } if(actualPercent > 0.5 && actualPercent <= 0.6668) {
        this.setState({ firstNext:true, secondNext: true, thirdNext: true, forthNext: true })
      } if(actualPercent > 0.6668 && actualPercent <= 0.8335) {
        this.setState({ firstNext:true, secondNext: true, thirdNext: true, forthNext: true, fifthNext: true })
      } if(actualPercent > 0.8335 && actualPercent === 1) {
        this.setState({ firstNext:true, secondNext: true, thirdNext: true, forthNext: true, fifthNext: true, sixthNext: true })
      }
    }

    if(nextProps.statusDelivery !== this.props.statusDelivery) {
      this.setState({ status: nextProps.statusDelivery })
    }
  }

  render() {
    return (
      <Grid className="info-container" fluid>
        <Row className="row-fluid info-content">
          <Col className="col-fluid col-info col-camera" md={6} sm={12} xs={12}>
            <Card className="card-camera">
              <Iframe
                className="iframe-camera"
                url="https://www.youtube.com/embed/VTMl_oSW2jA?autoplay=1"
                position="absolute"
                width="545px"
                height="410px"
                allowFullScreen />
            </Card>
          </Col>
          <Col className="col-fluid col-info" md={6} sm={12} xs={12}>
            <Row className="row-fluid extra-padding">
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                <Card className="card-info card-green" initiallyExpanded={true} >
                  <CardHeader
                    title="Status da Entrega Atual"
                    actAsExpander={true}
                    showExpandableButton={true} />
                  <CardText expandable={true}>
                    <Row className="row-fluid row-center">
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <div className="status-delivery">
                          <OriginIcon />
                          <NextIcon className={this.state.firstNext ? 'status-ready' : 'status-not-yet'} />
                          <NextIcon className={this.state.secondNext ? 'status-ready' : 'status-not-yet'} />
                          <NextIcon className={this.state.thirdNext ? 'status-ready' : 'status-not-yet'} />
                          <CarIcon />
                          <NextIcon className={this.state.forthNext ? 'status-ready' : 'status-not-yet'} />
                          <NextIcon className={this.state.fifthNext ? 'status-ready' : 'status-not-yet'} />
                          <NextIcon className={this.state.sixthNext ? 'status-ready' : 'status-not-yet'} />
                          <DestinationIcon />
                        </div>
                      </Col>
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <h1>{this.state.status}</h1>
                      </Col>
                    </Row>
                  </CardText>
                </Card>
              </Col>
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
                        <h1 className="special-h1">{this.props.status}</h1>
                      </Col>
                    </Row>
                  </CardText>
                </Card>
              </Col>
              <Col className="col-fluid" md={6} sm={6} xs={12}>
                <Card className="card-info card-salmon" initiallyExpanded={true} >
                  <CardHeader
                    title="Entrega Atual"
                    actAsExpander={true}
                    showExpandableButton={true} />
                  <CardText expandable={true}>
                    <Row className="row-fluid row-center">
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <img src={assets.navigation} alt="Ícone da bateria" />
                      </Col>
                      <Col className="col-fluid" md={12} sm={12} xs={12}>
                        <h2>{this.props.origin + ' -> ' + this.props.destination}</h2>
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
