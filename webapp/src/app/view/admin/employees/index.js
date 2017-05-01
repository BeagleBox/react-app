import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import {ListItem} from 'material-ui/List'

import Edit from 'material-ui/svg-icons/action/settings'
import Delete from 'material-ui/svg-icons/action/delete'
import Add from 'material-ui/svg-icons/content/add-circle'

import './admin-employees.css'

export default class AdminEmployees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeItems: [
        {id: 1, name: 'Elaine Meirelles', registration: '120010000', email: 'elaine@email.com', department: 'Secretaria'},
        {id: 2, name: 'João Henrique', registration: '120010001', email: 'joao@email.com', department: 'Biblioteca'},
        {id: 3, name: 'Yeltsin Soares', registration: '120010002', email: 'yeltsin@email.com', department: 'Sale I8'},
        {id: 4, name: 'Euler Tiago', registration: '120010003', email: 'euler@email.com', department: 'Enfermaria'},
        {id: 5, name: 'Lívia SantAnna', registration: '120010004', email: 'livia@email.com', department: 'Sala I2'},
      ],
    }
  }

  tableContent = () => {
    return <TableBody displayRowCheckbox={false} >
      {this.state.employeeItems.map((item, k) =>
        <TableRow key={k} >
          <TableRowColumn className="row-center">{item.id}</TableRowColumn>
          <TableRowColumn>{item.name}</TableRowColumn>
          <TableRowColumn className="row-center">{item.registration}</TableRowColumn>
          <TableRowColumn>{item.email}</TableRowColumn>
          <TableRowColumn>{item.department}</TableRowColumn>
          <TableRowColumn className="row-center">
            <IconButton><Edit /></IconButton>
            <IconButton><Delete /></IconButton>
          </TableRowColumn>
        </TableRow>
      )};
    </TableBody>
  }

  render() {
    const noContent = this.state.employeeItems.length === 0;

    const styles = {
      table: { fontWeight: 'bold', color: '#2F4F4F'},
      paper: { width: '95%', margin: 'auto', padding: '2em', maxHeight: '65vh', overflowY: 'auto'},
    };

    return (
      <Grid className="employees-container" fluid>
        <Row className="row-fluid employees-content">
          <Col className="col-fluid col-table-header" md={12} sm={12} xs={12}>
            <Paper className="paper-employees" style={styles.paper} zDepth={2} >
              <Row className="row-fluid row-employees" >
                <Col className="col-fluid col-employees" md={12} sm={12} xs={12}>
                  <h4 className="employees-title">Funcionários</h4>
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
                      <TableHeaderColumn style={styles.table}>Nome</TableHeaderColumn>
                      <TableHeaderColumn className="row-center" style={styles.table}>Matrícula</TableHeaderColumn>
                      <TableHeaderColumn style={styles.table}>E-mail</TableHeaderColumn>
                      <TableHeaderColumn style={styles.table}>Departamento</TableHeaderColumn>
                      <TableHeaderColumn className="row-center" style={styles.table}>Ações</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  { this.tableContent() }
                </Table>
              }
            </Paper>
          </Col>
          <Col className="col-fluid col-table-header" md={12} sm={12} xs={12}>
            <Paper className="paper-add-employees" style={styles.paper} zDepth={2} >
              <Row className="row-fluid row-employees" >
                <Col className="col-fluid col-employees" md={12} sm={12} xs={12}>
                  <ListItem className="employees-title" leftIcon={<Add />} >
                    Adicionar novo funcionário
                  </ListItem>
                </Col>
              </Row>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
