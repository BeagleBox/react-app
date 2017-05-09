import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'

export default class History extends Component {
  componentDidMount() {
    this.props.doUpdateTable()
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.props.fromDate !== nextProps.fromDate ||
       this.props.toDate !== nextProps.toDate) {
      this.props.doUpdateTable()
    }
  }

  tableContent = () => {
    return <TableBody displayRowCheckbox={false} >
      {this.props.tableItems.map((item, k) =>
        <TableRow key={k} >
          <TableRowColumn className="col-id row-center">{item.id}</TableRowColumn>
          <TableRowColumn className="row-center">{new Date(item.date).toLocaleDateString('pt-BR')}</TableRowColumn>
          <TableRowColumn className="col-origin">{item.origin}</TableRowColumn>
          <TableRowColumn>{item.destiny}</TableRowColumn>
          <TableRowColumn className="row-center">
            <RaisedButton className="btn-load-history" label="Lista" backgroundColor="#7496C4" />
          </TableRowColumn>
        </TableRow>
      )};
    </TableBody>
  }

  render() {
    const DateTimeFormat = global.Intl.DateTimeFormat;
    const noContent = this.props.tableItems.length === 0;

    const styles = {
      table: { fontWeight: 'bold', color: '#2F4F4F'},
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
            <Paper className="paper-table" style={styles.paper} zDepth={2} >
              { noContent && <h4>Não há resultados</h4> }

              { !noContent &&
                <Table fixedHeader={true} selectable={false} >
                  <TableHeader adjustForCheckbox={false} displaySelectAll={false} fixedHeader={true} >
                    <TableRow >
                      <TableHeaderColumn className="col-id row-center" style={styles.table}>ID</TableHeaderColumn>
                      <TableHeaderColumn className="row-center" style={styles.table}>Data</TableHeaderColumn>
                      <TableHeaderColumn className="col-origin" style={styles.table}>Origem</TableHeaderColumn>
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
