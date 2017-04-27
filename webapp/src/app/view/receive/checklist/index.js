import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import {List, ListItem} from 'material-ui/List'
import Check from 'material-ui/svg-icons/action/check-circle'
import CheckListIcon from 'material-ui/svg-icons/action/info'

import './receive-checklist.css'

export default class CheckList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {title: 'Caixa de pincéis: preto', check: false, icon: <CheckListIcon />},
        {title: 'Caixa de pincéis: vermelho', check: false, icon: <CheckListIcon />},
        {title: 'Caixa de pincéis: verde', check: false, icon: <CheckListIcon />},
        {title: 'Apagador de quadro branco', check: false, icon: <CheckListIcon />}
      ],
    }
  }

  componentDidMount() {
    this.props.handleItems(this.state.items)
  }

  handleCheck = (n, title, check) => {
    const items = this.state.items;
    var icon = <CheckListIcon />;
    check = !check;

    if(check) {
      icon = <Check className="check-icon"/>;
    }

    items[n] = {title: title, check: check, icon: icon}
    this.setState(items)
  }

  listItems = () => {
    return <div>
      {this.state.items.map((item, k) =>
        <ListItem
          key={k}
          primaryText={item.title}
          leftIcon={item.icon}
          onTouchTap={() => this.handleCheck(k, item.title, item.check)} />
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
        <Col className="col-fluid col-checklist" md={12} sm={12} xs={12}>
          <h3 className="checklist-title">Confira o que deve ter no BeagleBox</h3>
          <h4>Clique no item para confirmar seu recebimento</h4>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <List style={styles.list} className="receive-list-items">
            { this.listItems() }
          </List>
        </Col>
      </Row>
    );
  }
}

CheckList.propTypes ={
  handleItems: React.PropTypes.func.isRequired,
};
