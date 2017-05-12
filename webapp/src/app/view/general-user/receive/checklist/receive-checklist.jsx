import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

import './receive-checklist.css'

export default class ReceiveCheckList extends Component {
  constructor(props) {
    super(props);

    this.state ={
      click: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.hasChecked) {
      this.props.doChangeChecked()
    }
  }

  handleSelectAll = () => {
    let checked = false;
    this.setState({ click: this.state.click + 1 })

    if(this.state.click % 2 === 0) {
      checked = true;
    }

    this.props.doSelectAllItems(checked)
  }

  render() {
    const styles = {
      list: { width: '70%', margin: 'auto', textAlign: 'left', maxHeight: 380, overflowY: 'auto'},
    };

    return (
      <Row className="row-fluid">
        <Col className="col-fluid col-checklist" md={12} sm={12} xs={12}>
          <h3 className="checklist-title checklist-receive-title">Confira o que deve ter no BeagleBox</h3>
          <h4>Clique no item para confirmar seu recebimento</h4>
        </Col>
        <Col className="col-fluid col-checklist" md={12} sm={12} xs={12}>
          <Checkbox
            className="btn-select-all"
            label="Selecionar todos"
            onCheck={this.handleSelectAll} />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <List style={styles.list} className="receive-list-items">
            {this.props.items.map((item, k) =>
              <ListItem
                key={k}
                primaryText={item.title}
                leftIcon={item.icon}
                onTouchTap={() => this.props.doCheckItem(k, item.check)} />
            )}
          </List>
        </Col>
      </Row>
    );
  }
}
