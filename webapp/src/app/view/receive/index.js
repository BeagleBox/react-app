import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import OpenKey from './open-key'
import CheckList from './checklist'
import AlertDialog from './alert-dialog'

import './receive.css'

export default class Receive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  handleReceive = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <Grid className="receive-container" fluid>
        <Row className="row-fluid">
          <Col className="col-fluid" md={6} sm={12} xs={12}>
            <OpenKey />
          </Col>
          <Col className="col-fluid" md={6} sm={12} xs={12}>
            <CheckList handleReceive={this.handleReceive}/>
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <RaisedButton
              className="btn-receive-car"
              label="Recebido"
              secondary={true}
              onTouchTap={this.handleReceive} />
          </Col>
        </Row>
        <AlertDialog handleClose={this.handleClose} open={this.state.open} />
      </Grid>
    );
  }
}
