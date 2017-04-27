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
      notCheckedItems: [],
      items: [],
    }
  }

  handleItems = (items) => {
    this.setState({ items })
  }

  handleReceive = () => {
    const items = this.state.items;
    let notCheckedItems = [];

    for(var i = 0; i < items.length; i++) {
      if(!items[i].check) {
        notCheckedItems.push(items[i].title)
      }
    }

    this.setState({ open: true, notCheckedItems })
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
            <CheckList handleItems={this.handleItems}/>
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <RaisedButton
              className="btn-receive-car"
              label="Recebido"
              secondary={true}
              onTouchTap={this.handleReceive} />
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
