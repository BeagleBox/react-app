import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

import './receive-alert-dialog.css'

export default class AlertDialog extends Component {
  render() {
    const actions = [
      <RaisedButton
        label="Cancelar"
        onTouchTap={this.props.handleClose}
      />,
      <RaisedButton
        label="Confirmo!"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
    ];

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose} >
        The actions in this window were passed in as an array of React objects.
      </Dialog>
    );
  }
}

AlertDialog.propTypes ={
  handleClose: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired,
};
