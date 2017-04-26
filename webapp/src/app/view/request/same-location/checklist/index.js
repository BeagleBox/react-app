import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import {List, ListItem} from 'material-ui/List'
import Check from 'material-ui/svg-icons/action/check-circle'

import './request-same-location-checklist.css'

export default class CheckList extends Component {
  render() {
    const styles = {
      list: {
        width: '70%',
        margin: 'auto',
        textAlign: 'left',
        maxHeight: 450,
        overflowY: 'auto'
      },
    };

    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h3 className="checklist-title">O que será levado pelo BeagleBox?</h3>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <List style={styles.list}>
            <ListItem primaryText="Projetor branco 1080px" leftIcon={<Check />} />
            <ListItem primaryText="Caixa de pincéis cor: preto" leftIcon={<Check />} />
            <ListItem primaryText="Caixa de pincéis cor: vermelho" leftIcon={<Check />} />
            <ListItem primaryText="Caixa de pincéis cor: verde" leftIcon={<Check />} />
            <ListItem primaryText="Caneta a laser" leftIcon={<Check />} />
          </List>
        </Col>
      </Row>
    );
  }
}
