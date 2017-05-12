import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import {List, ListItem} from 'material-ui/List'
import TextField from 'material-ui/TextField'
import Check from 'material-ui/svg-icons/action/thumb-up'
import Add from 'material-ui/svg-icons/content/add-circle'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

import './request-same-location-checklist.css'

export default class RequestCheckList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: 'Adicionar novo item',
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isDeleted) {
      this.props.doChangeDeleted(false)
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

  handleTextFieldKeyPress = (event) => {
    const acceptedCodes = ["Enter", "Escape"];

    event.preventDefault();

    if (acceptedCodes.includes(event.key)) {
      this.props.doAddNewItem(event.target.value)
      this.setState({newItem: "Adicionar novo item"})
    }
  }

  handleDeleteItem = (item) => {
    this.props.doDeleteItem(item)
    this.props.doChangeDeleted(true)
  }

  render() {
    const styles = {
      list: { width: '70%', margin: 'auto', textAlign: 'left', maxHeight: 330, overflowY: 'auto' },
    };

    return (
      <Row className="row-fluid">
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h3 className="checklist-title checklist-request-title">O que será levado pelo BeagleBox?</h3>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <List style={styles.list} className="request-list-items">
            {this.props.items.map((item, k) =>
              <ListItem
                key={k}
                primaryText={item}
                leftIcon={<Check className="btn-request-list" />}
                rightIcon={<DeleteIcon className="btn-request-delete" />}
                onTouchTap={() => this.handleDeleteItem(item)} />
            )}
          </List>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <List className="request-list-add-item" style={styles.list}>
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
