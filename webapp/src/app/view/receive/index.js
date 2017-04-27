import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import OpenKey from './open-key'
import CheckList from './checklist'
import AlertDialog from './alert-dialog'

import './receive.css'

export default class Receive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      notCheckedItems: [],
    }
  }

  handleReceive = (open, items) => {
    this.setState({ open, notCheckedItems: items })
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
        </Row>
        <AlertDialog
          handleClose={this.handleClose}
          open={this.state.open}
          items={this.state.notCheckedItems} />
      </Grid>
    );
  }
}
