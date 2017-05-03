import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

import assets from '../../assets'
import './request-same-location-dialog-key.css'

export default class DialogKey extends Component {
  render() {
    const actions = [
      <RaisedButton
        label="Ok"
        className="btn-confirm-success"
        backgroundColor="#27AE60"
        onTouchTap={() => this.props.doShowDialogKey(false)}
      />,
    ];

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={() => this.props.doShowDialogKey(false)} >

        <Grid className="request-container" fluid>
          <Row className="row-fluid">
            <Col className="col-fluid col-img-success" md={12} sm={12} xs={12}>
              <img className="img-request" src={assets.success} alt={"Sucesso"} />
            </Col>
            <Col className="col-fluid" md={12} sm={12} xs={12}>
              <h3 className="dialog-title">BeagleBox enviado com sucesso!</h3>
            </Col>
            <Col className="col-fluid" md={12} sm={12} xs={12}>
              <h4>Sua chave gerada foi: {this.props.accessKey} </h4>
            </Col>
          </Row>
        </Grid>
      </Dialog>
    );
  }
}
