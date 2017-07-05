import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

import OpenKey from './open-key'
import CheckList from './checklist'
import AlertDialog from '../../../shared/alert-dialog'

import assets from './assets'

import './receive.css'

export default class Receive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openAccess: true,
      open_key: '',
      isOpenKey: false,
      keyError: '',
    }
  }

  handleReceiveItems = () => {
    if(this.props.notCheckedItems.length > 0) {
      this.props.doShowAlertDialog(true)
    }
  }

  handleDialogClose = () => {
    this.setState({ openAccess: false });
  }

  handleInputChange = (event) => {
    this.setState({ open_key: event.target.value })
  }

  confirmOpenKey = () => {
    if(parseInt(this.state.open_key, 10) === this.props.accessKey) {
      this.setState({ keyError: "", openAccess: false, isOpenKey: true })
      this.props.doChangePlace(false)
    } else {
      this.setState({ keyError: "Senha de acesso incorreta." })
    }
  }

  render() {
    const action = [
      <RaisedButton
        label="Ok!"
        className="btn-confirm-alert"
        backgroundColor="#03986F"
        onTouchTap={this.confirmOpenKey}
      />
    ];

    return (
      <Grid className="receive-container" fluid>
        <Dialog
          className="alert-dialog-container"
          actions={action}
          modal={false}
          open={this.state.openAccess}
          onRequestClose={this.handleDialogClose} >

          <Grid className="receive-container alert-dialog-content" fluid>
            <Row className="row-fluid">
              <Col className="col-fluid col-img-alert" md={12} sm={12} xs={12}>
                <img className="img-receive" src={assets.accessKey} alt={"Chave de acesso"} />
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                <h3 className="dialog-success-title">Qual a chave de acesso?</h3>
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                <TextField
                  name="open_key"
                  floatingLabelText="Chave de acesso"
                  errorText={this.state.keyError}
                  floatingLabelStyle={{color: '#696969'}}
                  fullWidth={true}
                  onChange={this.handleInputChange} />
              </Col>
            </Row>
          </Grid>
        </Dialog>

        {this.state.isOpenKey &&
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
        }
        <AlertDialog />
      </Grid>
    );
  }
}
