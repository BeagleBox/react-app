import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import {List, ListItem} from 'material-ui/List'
import CheckListIcon from 'material-ui/svg-icons/action/thumb-down'

import assets from '../assets'
import './receive-alert-dialog.css'

export default class AlertDialog extends Component {
  listItems = () => {
    return <div>
      {this.props.items.map((item, k) =>
        <ListItem key={k} primaryText={item} leftIcon={<CheckListIcon />} />
      )}
    </div>
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancelar"
        onTouchTap={this.props.handleClose}
      />,
      <RaisedButton
        label="Confirmo!"
        className="btn-confirm-alert"
        backgroundColor="#AA302F"
        onTouchTap={this.props.handleClose}
      />,
    ];

    const styles = {
      list: {
        width: '70%',
        margin: 'auto',
        textAlign: 'left',
        maxHeight: 250,
        overflowY: 'auto'
      },
    };

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose} >

        <Grid className="receive-container" fluid>
          <Row className="row-fluid">
            <Col className="col-fluid col-img-alert" md={12} sm={12} xs={12}>
              <img className="img-receive" src={assets.alert} alt={"Alerta"} />
            </Col>
            <Col className="col-fluid" md={12} sm={12} xs={12}>
              <h3 className="dialog-title">Existem items não confirmados</h3>
            </Col>
            <Col className="col-fluid" md={12} sm={12} xs={12}>
              <List style={styles.list} className="receive-list-items">
                { this.listItems() }
              </List>
            </Col>
          </Row>
        </Grid>

      </Dialog>
    );
  }
}

AlertDialog.propTypes ={
  handleClose: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired,
  items: React.PropTypes.array.isRequired,
};
