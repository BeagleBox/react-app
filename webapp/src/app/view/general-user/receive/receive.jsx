import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import OpenKey from './open-key'
import CheckList from './checklist'
import AlertDialog from '../../../shared/alert-dialog'

import './receive.css'

export default class Receive extends Component {
  handleReceiveItems = () => {
    if(this.props.notCheckedItems.length > 0) {
      this.props.doShowAlertDialog(true)
    }
  }

  render() {
    return (
      <Grid className="receive-container" fluid>
        <Row className="row-fluid">
          <Col className="col-fluid" md={5.5} sm={12} xs={12}>
            <OpenKey />
          </Col>
          <Col className="col-fluid" md={1}>
            <hr className="vertical-divider" />
          </Col>
          <Col className="col-fluid" md={5.5} sm={12} xs={12}>
            <CheckList />
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <RaisedButton
              className="btn-receive-car"
              label="Recebido"
              backgroundColor="#C5A265"
              onTouchTap={this.handleReceiveItems} />
          </Col>
        </Row>
        <AlertDialog />
      </Grid>
    );
  }
}
