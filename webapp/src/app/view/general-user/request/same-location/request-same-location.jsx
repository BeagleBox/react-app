import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import Location from './location'
import CheckList from './checklist'
import DialogKey from  '../../../../shared/alert-dialog'

import * as validation from '../validation'
import './request-same-location.css'

export default class RequestSameLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSnackbar: false,
      openDialog: false,
      originError: '',
      destinationError: '',
    }
  }

  componentWillMount() {
    this.props.doDisableButton(false)
  }

  handleSend = () => {
    const origin = this.props.origin;
    const destination = this.props.destination;
    const items = this.props.loadList;

    if(validation.isEmpty(origin)) {
      this.setState({originError: "Este campo não pode estar em branco"})
    } else {
      this.setState({originError: ""})
    }

    if(validation.isEmpty(destination)) {
      this.setState({destinationError: "Este campo não pode estar em branco"})
    } else {
      this.setState({destinationError: ""})
    }

    if(!validation.isEmpty(origin) && !validation.isEmpty(destination)) {
      if(validation.isEqual(origin, destination)) {
        this.setState({destinationError: "O destino não pode ser o mesmo que a origem"})
      } else {
        this.setState({destinationError: ""})
      }
    }

    if(validation.isEmpty(items)) {
      this.setState({openSnackbar: true})
    }

    if(!validation.isEmpty(origin) && !validation.isEmpty(destination) &&
      !validation.isEmpty(items) && !validation.isEqual(origin, destination)) {

      this.props.doSendCar(items)
      this.props.doGenerateKey(Math.floor(1000 + Math.random() * 9000))
      this.props.doShowDialogKey(true)
    }
  }

  handleRequestClose = () => {
    this.setState({
      openSnackbar: false,
    });
  };

  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={5.5} sm={12} xs={12}>
          <Location originError={this.state.originError} destinationError={this.state.destinationError} />
        </Col>
        <Col className="col-fluid" md={1} >
          <hr className="vertical-divider" />
        </Col>
        <Col className="col-fluid" md={5.5} sm={12} xs={12}>
          <CheckList />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          {!this.props.requestButton &&
          <RaisedButton
            className="btn-request-car"
            label="Enviar"
            backgroundColor="#004E8F"
            onTouchTap={this.handleSend} />
          }
          {this.props.requestButton &&
          <h3>Senha Gerada: {this.props.accessKey}</h3>
          }
        </Col>
        <Snackbar
          open={this.state.openSnackbar}
          message="A lista de items não pode estar vazia"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          style={{top: 0, height: 50, transform: 'translate3d(-50%, 0, 0)'}} />
        <DialogKey />
      </Row>
    );
  }
}
