import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import './history.css'

export default class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historyItems: [
        {id: 1, date: '05/03/2017', origin: 'Secretaria', destiny: 'Sala I1', Checklist: ''},
        {id: 2, date: '10/03/2017', origin: 'Secretaria', destiny: 'Biblioteca', Checklist: ''},
        {id: 3, date: '15/03/2017', origin: 'Secretaria', destiny: 'Biblioteca', Checklist: ''},
        {id: 4, date: '20/03/2017', date: '05/03/2017', origin: 'Secretaria', destiny: 'Enfermaria', Checklist: ''},
        {id: 5, date: '25/03/2017', origin: 'Secretaria', destiny: 'Sala I8', Checklist: ''},
        {id: 6, date: '30/03/2017', origin: 'Secretaria', destiny: 'Sala I6', Checklist: ''},
        {id: 7, date: '05/04/2017', origin: 'Secretaria', destiny: 'Sala I2', Checklist: ''},
        {id: 8, date: '10/04/2017', origin: 'Secretaria', destiny: 'Biblioteca', Checklist: ''},
      ]
    }
  }

  tableContent = () => {
    return <TableBody displayRowCheckbox={false} >
      {this.state.historyItems.map((item, k) =>
        <TableRow>
          <TableRowColumn className="row-center">{item.id}</TableRowColumn>
          <TableRowColumn className="row-center">{item.date}</TableRowColumn>
          <TableRowColumn>{item.origin}</TableRowColumn>
          <TableRowColumn>{item.destiny}</TableRowColumn>
          <TableRowColumn className="row-center">
            <RaisedButton label="Lista" primary={true} />
          </TableRowColumn>
        </TableRow>
      )}
    </TableBody>
  }

  render() {
    const styles = {
      table: {
        fontWeight: 'bold',
        color: '#2F4F4F',
      },
      tableCenter: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2F4F4F',
      },
      paper: {
        width: '70%',
        margin: 'auto',
        padding: '2em',
        maxHeight: '80vh',
        overflowY: 'auto'
      }
    };

    return (
      <Grid className="history-container" fluid>
        <Row className="row-fluid history-content">
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <h3 className="history-title">Meus Envios</h3>
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <Paper style={styles.paper} zDepth={2} >
              <Table fixedHeader={true} selectable={false} >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                  <TableRow >
                    <TableHeaderColumn style={styles.tableCenter}>ID</TableHeaderColumn>
                    <TableHeaderColumn style={styles.tableCenter}>Data</TableHeaderColumn>
                    <TableHeaderColumn style={styles.table}>Origem</TableHeaderColumn>
                    <TableHeaderColumn style={styles.table}>Destino</TableHeaderColumn>
                    <TableHeaderColumn style={styles.tableCenter}>Carga</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                { this.tableContent() }
              </Table>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
