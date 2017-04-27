import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'

import './history.css'

export default class Request extends Component {
  render() {
    const styles = {
      table: {
        backgroundColor: '#F0F0F0',
        borderColor: '#000',
      },
      paper: {
        width: '70%',
        margin: 'auto',
        padding: '1em',
        backgroundColor: '#F0F0F0',
      }
    };

    return (
      <Grid className="history-container" fluid>
        <Row className="row-fluid history-content">
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <h3>Meus Envios</h3>
          </Col>
          <Col className="col-fluid" md={12} sm={12} xs={12}>
            <Paper style={styles.paper} zDepth={2} >
              <Table fixedHeader={true} style={styles.table} >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Origem</TableHeaderColumn>
                    <TableHeaderColumn>Destino</TableHeaderColumn>
                    <TableHeaderColumn>Checklist</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} >
                  <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>3</TableRowColumn>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
