import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import assets from '../../assets'
import AutoComplete from 'material-ui/AutoComplete'

export default class Location extends Component {
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
            dataSource={this.props.location}
            filter={AutoComplete.caseInsensitiveFilter}
            menuStyle={{maxHeight: 160, overflowY: 'auto'}}
            onNewRequest={(_, value) => this.props.doSelectOriginLocation(value)} />
        </Col>
        <Col className="col-fluid" md={12} sm={12} xs={12}>
          <AutoComplete
            name="location"
            className="form-content-field"
            floatingLabelText="Destino final"
            floatingLabelStyle={{color: '#696969'}}
            dataSource={this.props.location}
            filter={AutoComplete.caseInsensitiveFilter}
            menuStyle={{maxHeight: 160, overflowY: 'auto'}}
            onNewRequest={(_, value) => this.props.doSelectDestinationLocation(value)} />
        </Col>
      </Row>
    );
  }
}
