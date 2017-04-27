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
        {id: 1, origin: 'Secretaria', destiny: 'Sala I1', Checklist: ''},
        {id: 2, origin: 'Secretaria', destiny: 'Biblioteca', Checklist: ''},
        {id: 3, origin: 'Secretaria', destiny: 'Biblioteca', Checklist: ''},
        {id: 4, origin: 'Secretaria', destiny: 'Enfermaria', Checklist: ''},
        {id: 5, origin: 'Secretaria', destiny: 'Sala I8', Checklist: ''},
        {id: 6, origin: 'Secretaria', destiny: 'Sala I6', Checklist: ''},
        {id: 7, origin: 'Secretaria', destiny: 'Sala I2', Checklist: ''},
        {id: 8, origin: 'Secretaria', destiny: 'Biblioteca', Checklist: ''},
      ]
    }
  }

  tableContent = () => {
    return <TableBody displayRowCheckbox={false} >
      {this.state.historyItems.map((item, k) =>
        <TableRow>
          <TableRowColumn>{item.id}</TableRowColumn>
          <TableRowColumn>{item.origin}</TableRowColumn>
          <TableRowColumn>{item.destiny}</TableRowColumn>
          <TableRowColumn>
            <RaisedButton label="Lista" primary={true} />
          </TableRowColumn>
        </TableRow>
      )}
    </TableBody>
  }

  render() {
    const styles = {
      table: {
        borderColor: '#000',
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
              <Table fixedHeader={true} style={styles.table} selectable={false} >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Origem</TableHeaderColumn>
                    <TableHeaderColumn>Destino</TableHeaderColumn>
                    <TableHeaderColumn>Checklist</TableHeaderColumn>
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
