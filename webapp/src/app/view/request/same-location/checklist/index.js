import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import {List, ListItem} from 'material-ui/List'
import TextField from 'material-ui/TextField'
import Check from 'material-ui/svg-icons/action/check-circle'
import Add from 'material-ui/svg-icons/content/add-circle'

import './request-same-location-checklist.css'

export default class CheckList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: 'Adicionar novo item',
      items: [],
    }
  }

  handleNameAnItem = () => {
    this.setState({
      newItem: <TextField
        className="add-new-item"
        hintText="Digite o item"
        fullWidth={true}
        underlineShow={false}
        onKeyUp={event => this.handleTextFieldKeyPress(event)} />
    })
  }

  handleTextFieldKeyPress = event => {
    const acceptedCodes = ["Enter", "Escape"];

    event.preventDefault();

    if (acceptedCodes.includes(event.key)) {
      this.addNewItem(event.target.value)
      this.setState({newItem: "Adicionar novo item"})
    }
  }

  addNewItem = (item) => {
    this.setState({ items: this.state.items.concat([item]) })
  }

  listItems = () => {
    return <div>
      {this.state.items.map((item) =>
        <ListItem primaryText={item} leftIcon={<Check />} />
      )}
    </div>
  }

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
          <List style={styles.list} className="request-list-items">
            { this.listItems() }
            <ListItem
              className="request-add-item"
              primaryText={this.state.newItem}
              leftIcon={<Add />}
              onTouchTap={this.handleNameAnItem} />
          </List>
        </Col>
      </Row>
    );
  }
}
