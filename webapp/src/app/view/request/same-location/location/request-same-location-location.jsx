import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import assets from '../../assets'
import AutoComplete from 'material-ui/AutoComplete'

export default class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: this.handleLocationData(),
    }
  }

  handleLocationData = () => {
    const items = this.props.location
    var titles = []

    for(var i = 0; i < items.length; i++) {
      titles.push(items[i].name)
    }

    return titles
  }

  render() {
    return (
      <Row className="row-fluid">
        <Col className="col-fluid col-request col-image" md={12} sm={12} xs={12}>
          <img className="img-request" src={assets.sameLocation} alt={"Localização Igual"} />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <h3 className="request-title">O carrinho já está neste ambiente</h3>
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <AutoComplete
            name="location"
            className="form-content-field"
            floatingLabelText="Minha localização"
            floatingLabelStyle={{color: '#696969'}}
            value={this.props.origin}
            dataSource={this.state.location}
            filter={AutoComplete.caseInsensitiveFilter}
            menuStyle={{maxHeight: 160, overflowY: 'auto'}}
            onNewRequest={(_, value) => this.props.doSelectOriginLocation(this.state.location[value])}
            errorText={this.props.originError} />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <AutoComplete
            name="location"
            className="form-content-field"
            floatingLabelText="Destino final"
            floatingLabelStyle={{color: '#696969'}}
            dataSource={this.state.location}
            filter={AutoComplete.caseInsensitiveFilter}
            menuStyle={{maxHeight: 160, overflowY: 'auto'}}
            onNewRequest={(_, value) => this.props.doSelectDestinationLocation(this.state.location[value])}
            errorText={this.props.destinationError} />
        </Col>
      </Row>
    );
  }
}

Location.PropTypes = {
  originError: React.PropTypes.string,
  destinationError: React.PropTypes.string,
}
