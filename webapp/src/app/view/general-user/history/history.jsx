import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Paper from 'material-ui/Paper'
import DatePicker from 'material-ui/DatePicker'

import TransformationTable from  '../../../shared/transportation-table'

import './history.css'

export default class History extends Component {
  render() {
    const DateTimeFormat = global.Intl.DateTimeFormat;

    const styles = {
      paper: { width: '90%', margin: 'auto', padding: '2em', maxHeight: '65vh', overflowY: 'auto'},
    };

    const dateProps = { className: "filter-date", underlineShow: false, autoOk: true,
      okLabel: "OK", cancelLabel: "Cancelar", locale: "pt-BR",
    };

    return (
      <Grid className="history-container" fluid>
        <Row className="row-fluid history-content">
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <h3 className="history-title">Meus Envios</h3>
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <Paper className="paper-filter" style={styles.paper} zDepth={2} >
              <Row className="row-fluid row-filter" >
                <Col className="col-fluid col-filter" md={4} sm={12} xs={12}>
                  <h4 className="filter-title">Filtrar por data</h4>
                </Col>
                <Col className="col-fluid col-filter" md={4} sm={6} xs={6}>
                  <DatePicker
                    floatingLabelText="De..."
                    DateTimeFormat={DateTimeFormat}
                    value={this.props.fromDate}
                    onChange={(_, fromDate) => this.props.doUpdateFromDate(fromDate)}
                    {...dateProps} />
                </Col>
                <Col className="col-fluid col-filter" md={4} sm={6} xs={6}>
                  <DatePicker
                    floatingLabelText="Até..."
                    DateTimeFormat={DateTimeFormat}
                    value={this.props.toDate}
                    onChange={(_, toDate) => this.props.doUpdateToDate(toDate)}
                    {...dateProps} />
                </Col>
              </Row>
            </Paper>
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <TransformationTable />
          </Col>
        </Row>
      </Grid>
    );
  }
}
