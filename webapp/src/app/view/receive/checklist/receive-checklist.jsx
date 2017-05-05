import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import {List, ListItem} from 'material-ui/List'

import './receive-checklist.css'

export default class ReceiveCheckList extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.hasChecked) {
      this.props.doChangeChecked()
    }
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
