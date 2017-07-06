import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

import OpenKey from './open-key'
import CheckList from './checklist'
import AlertDialog from '../../../shared/alert-dialog'

import AccessDenied from '../../../shared/access-denied'

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

      currentDelivery: '',
      currentKey: '',
    }
  }

  componentDidMount() {
    this.props.doGetDeliveries()
  }

  handleReceiveItems = () => {
    if(this.props.notCheckedItems.length > 0) {
      this.props.doShowAlertDialog(true)
    } else {
      this.props.doAllowReceive(true)
      hashHistory.push('/informacoes-gerais');
    }
  }

  handleDialogClose = () => {
    this.setState({ openAccess: false });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  confirmOpenKey = () => {
    const deliveries = this.props.deliveries
    let currentKey = ''
    let currentDelivery = ''
    let entrou = false

    for (var i = 0; i < deliveries.length; i++) {
      if(this.state.tracker === deliveries[i].tracker) {
        currentKey = deliveries[i].key_access
        currentDelivery = deliveries[i]
        entrou = true
        this.setState({ identifierError: "" })
      }
    }

    if(!entrou) {
      this.setState({ identifierError: "Identificador incorreto." })
    }

    if(this.state.open_key === currentKey) {
      this.setState({
        keyError: "",
        openAccess: false,
        isOpenKey: true,
        currentDelivery: currentDelivery,
        currentKey: currentKey,
      })
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
      {this.props.receiveAllowed &&
        <AccessDenied />
      }
      {!this.props.receiveAllowed &&
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
                <h3 className="dialog-success-title">Qual o identificador e a chave de acesso?</h3>
              </Col>
              <Col className="col-fluid" md={5.5} sm={12} xs={12}>
                <TextField
                  name="tracker"
                  floatingLabelText="Identificador"
                  floatingLabelStyle={{color: '#696969'}}
                  errorText={this.state.identifierError}
                  fullWidth={true}
                  onChange={this.handleInputChange} />
              </Col>
              <Col className="col-fluid" md={1} ></Col>
              <Col className="col-fluid" md={5.5} sm={12} xs={12}>
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
        }

        {this.state.isOpenKey &&
          <Row className="row-fluid">
            <Col className="col-fluid" md={5.5} sm={12} xs={12}>
              <OpenKey key_access={this.state.currentKey} />
            </Col>
            <Col className="col-fluid" md={1}>
              <hr className="vertical-divider" />
            </Col>
            <Col className="col-fluid" md={5.5} sm={12} xs={12}>
              <CheckList items={this.state.currentDelivery.items} />
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
