import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'

import './history.css'

export default class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historyItems: [
        {id: 1, date: '03-05-2017', origin: 'Secretaria', destiny: 'Sala I1', Checklist: ''},
        {id: 2, date: '03-10-2017', origin: 'Secretaria', destiny: 'Biblioteca', Checklist: ''},
        {id: 3, date: '03-15-2017', origin: 'Secretaria', destiny: 'Biblioteca', Checklist: ''},
        {id: 4, date: '03-20-2017', origin: 'Secretaria', destiny: 'Enfermaria', Checklist: ''},
        {id: 5, date: '03-25-2017', origin: 'Secretaria', destiny: 'Sala I8', Checklist: ''},
        {id: 6, date: '03-30-2017', origin: 'Secretaria', destiny: 'Sala I6', Checklist: ''},
        {id: 7, date: '04-05-2017', origin: 'Secretaria', destiny: 'Sala I2', Checklist: ''},
      ],
      itemsToAppear: [],
      fromDate: new Date(+new Date() - 10 * 24 * 60 * 60 * 1000),
      toDate: new Date(),
    }
  }

  validTable = (fromDate, toDate) => {
    var items = this.state.historyItems;
    var date = undefined;

    this.setState({ itemsToAppear: [] })
    for(var i = 0; i < items.length; i++) {
      date = new Date(items[i].date).toISOString()

      if(date >= fromDate.toISOString() && date <= toDate.toISOString()) {
        this.setState({ itemsToAppear: this.state.itemsToAppear.concat([items[i]]) })
      }
    }
  }

  handleChangeFromDate = (fromDate) => {
    this.setState({ fromDate })
    this.validTable(fromDate, this.state.toDate)
  }

  handleChangeToDate = (toDate) => {
    this.setState({ toDate })
    this.validTable(this.state.fromDate, toDate)
  }

  tableContent = () => {
    return <TableBody displayRowCheckbox={false} >
      {this.state.itemsToAppear.map((item, k) =>
        <TableRow key={k} >
          <TableRowColumn className="row-center">{item.id}</TableRowColumn>
          <TableRowColumn className="row-center">{new Date(item.date).toLocaleDateString('pt-BR')}</TableRowColumn>
          <TableRowColumn>{item.origin}</TableRowColumn>
          <TableRowColumn>{item.destiny}</TableRowColumn>
          <TableRowColumn className="row-center">
            <RaisedButton label="Lista" primary={true} />
          </TableRowColumn>
        </TableRow>
      )};
    </TableBody>
  }

  render() {
    const DateTimeFormat = global.Intl.DateTimeFormat;
    const noContent = this.state.itemsToAppear.length === 0;

    const styles = {
      table: { fontWeight: 'bold', color: '#2F4F4F'},
      paper: { width: '70%', margin: 'auto', padding: '2em', maxHeight: '70vh', overflowY: 'auto'},
    };

    const dateProps = { className: "filter-date", mode: "landscape", underlineShow: false, autoOk: true,
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
                    value={this.state.fromDate}
                    onChange={(_, fromDate) => this.handleChangeFromDate(fromDate)}
                    {...dateProps} />
                </Col>
                <Col className="col-fluid col-filter" md={4} sm={6} xs={6}>
                  <DatePicker
                    floatingLabelText="Até..."
                    DateTimeFormat={DateTimeFormat}
                    value={this.state.toDate}
                    onChange={(_, toDate) => this.handleChangeToDate(toDate)}
                    {...dateProps} />
                </Col>
              </Row>
            </Paper>
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <Paper style={styles.paper} zDepth={2} >
              { noContent && <h4>Não há resultados</h4> }

              { !noContent &&
                <Table fixedHeader={true} selectable={false} >
                  <TableHeader adjustForCheckbox={false} displaySelectAll={false} fixedHeader={true} >
                    <TableRow >
                      <TableHeaderColumn className="row-center" style={styles.table}>ID</TableHeaderColumn>
                      <TableHeaderColumn className="row-center" style={styles.table}>Data</TableHeaderColumn>
                      <TableHeaderColumn style={styles.table}>Origem</TableHeaderColumn>
                      <TableHeaderColumn style={styles.table}>Destino</TableHeaderColumn>
                      <TableHeaderColumn className="row-center" style={styles.table}>Carga</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  { this.tableContent() }
                </Table>
              }
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
