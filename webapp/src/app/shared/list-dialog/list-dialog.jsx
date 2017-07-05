import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import {List, ListItem} from 'material-ui/List'
import CheckListIcon from 'material-ui/svg-icons/action/thumb-up'

import assets from '../../view/general-user/receive/assets'
import './list-dialog.css'

export default class ListDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.index !== null) {
      this.setState({ index: nextProps.index })
    }
  }

  render() {
    const styles = {
      list: { width: '70%', margin: 'auto', textAlign: 'left', maxHeight: 250, overflowY: 'auto' },
    };

    const action = [
      <RaisedButton
        label="Ok"
        onTouchTap={() => this.props.doShowListDialog(false)}
      />
    ];

    const index = this.state.index;
    return (
      <div>
        <Dialog
          className="alert-dialog-container"
          actions={action}
          modal={false}
          open={this.props.openListDialog}
          onRequestClose={() => this.props.doShowListDialog(false)} >

          <Grid className="receive-container alert-dialog-content" fluid>
            <Row className="row-fluid">
              <Col className="col-fluid col-img-alert" md={12} sm={12} xs={12}>
                <img className="img-receive" src={assets.receive} alt={"Itens Recebidos"} />
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                <h3 className="dialog-success-title">Lista de Itens</h3>
                <h4 className="dialog-success-title">{this.props.origin + ' -> ' + this.props.destination}</h4>
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                {(this.props.items.length !== 0 && this.props.index !== null) &&
                <List style={styles.list} className="receive-list-items">
                  {this.props.items[index].items.map((item, k) =>
                    <ListItem key={k} primaryText={item.name} leftIcon={<CheckListIcon />} />
                  )}
                </List>
                }
              </Col>
            </Row>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

ListDialog.PropTypes = {
  index: React.PropTypes.number,
  origin: React.PropTypes.string,
  destination: React.PropTypes.string
}
