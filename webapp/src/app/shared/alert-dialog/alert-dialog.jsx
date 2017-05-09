import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import {List, ListItem} from 'material-ui/List'
import CheckListIcon from 'material-ui/svg-icons/action/thumb-down'

import assets from './assets'
import './alert-dialog.css'

export default class AlertDialog extends Component {
  componentDidMount() {
    this.props.doGetNotCheckedList()
  }

  render() {
    const styles = {
      list: { width: '70%', margin: 'auto', textAlign: 'left', maxHeight: 250, overflowY: 'auto' },
    };

    const actionsReceive = [
      <RaisedButton
        label="Cancelar"
        onTouchTap={() => this.props.doShowAlertDialog(false)}
      />,
      <RaisedButton
        label="Confirmo!"
        className="btn-confirm-alert"
        backgroundColor="#AA302F"
        onTouchTap={() => this.props.doShowAlertDialog(false)}
      />,
    ];

    const actionsRequest = [
    <RaisedButton
        label="Cancelar"
        onTouchTap={() => this.props.doShowDialogKey(false)}
      />,
      <RaisedButton
        label="Ok"
        className="btn-confirm-success"
        backgroundColor="#27AE60"
        onTouchTap={() => this.props.doShowDialogKey(false)}
      />,
    ];

    return (
      <div>
      {this.props.openReceive &&
        <Dialog
          className="alert-dialog-container"
          actions={actionsReceive}
          modal={false}
          open={this.props.openReceive}
          onRequestClose={() => this.props.doShowAlertDialog(false)} >

          <Grid className="receive-container alert-dialog-content" fluid>
            <Row className="row-fluid">
              <Col className="col-fluid col-img-alert" md={12} sm={12} xs={12}>
                <img className="img-receive" src={assets.alert} alt={"Alerta"} />
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                <h3 className="dialog-alert-title">Confirma que estes itens não chegaram?</h3>
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                <List style={styles.list} className="receive-list-items">
                  {this.props.notCheckedItems.map((item, k) =>
                    <ListItem key={k} primaryText={item} leftIcon={<CheckListIcon />} />
                  )}
                </List>
              </Col>
            </Row>
          </Grid>
        </Dialog>
      }

      {this.props.openRequest &&
        <Dialog
          actions={actionsRequest}
          modal={false}
          open={this.props.openRequest}
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
                <h4>Chave gerada: <span className="accessKey-number">{this.props.accessKey}</span></h4>
              </Col>
            </Row>
          </Grid>
        </Dialog>
      } </div>
    );
  }
}
