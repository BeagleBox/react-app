import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import './admin-departments.css'

export default class AdminDepartments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departmentItems: [
        {id: 1, name: 'Secretaria'},
        {id: 2, name: 'Biblioteca'},
        {id: 3, name: 'Enfermaria'},
        {id: 4, name: 'Sala I3'},
        {id: 5, name: 'O Belisco'},
      ],
    }
  }

  tableContent = () => {
    return <TableBody displayRowCheckbox={false} >
      {this.state.departmentItems.map((item, k) =>
        <TableRow key={k} >
          <TableRowColumn className="row-center">{item.id}</TableRowColumn>
          <TableRowColumn>{item.name}</TableRowColumn>
          <TableRowColumn className="row-center">
            <RaisedButton className="btn-edit-department" label="Editar" primary={true} />
            <RaisedButton label="Excluir" backgroundColor="#CD2A00" labelColor="#FFF" />
          </TableRowColumn>
        </TableRow>
      )};
    </TableBody>
  }

  render() {
    const noContent = this.state.departmentItems.length === 0;

    const styles = {
      table: { fontWeight: 'bold', color: '#2F4F4F'},
      paper: { width: '95%', margin: 'auto', padding: '2em', maxHeight: '70vh', overflowY: 'auto'},
    };

    return (
      <Grid className="department-container" fluid>
        <Row className="row-fluid department-content">
          <Col className="col-fluid col-table-header" md={12} sm={12} xs={12}>
            <Paper className="paper-department" style={styles.paper} zDepth={2} >
              <Row className="row-fluid row-department" >
                <Col className="col-fluid col-department" md={12} sm={12} xs={12}>
                  <h4 className="department-title">Departamentos</h4>
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
                      <TableHeaderColumn className="row-center" style={styles.table}>Ações</TableHeaderColumn>
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
