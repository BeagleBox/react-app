import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import {ListItem} from 'material-ui/List'

import Edit from 'material-ui/svg-icons/action/settings'
import Delete from 'material-ui/svg-icons/action/delete'
import Add from 'material-ui/svg-icons/content/add-circle'

import CreateEmployees from './create-edit'
import './admin-employees.css'

export default class AdminEmployees extends Component {
  componentWillMount() {
    this.props.doGetAllEmployees()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.created) {
      this.props.doChangeCreated()
    }
    if(nextProps.edited) {
      this.props.doChangeEdited()
    }
    if(nextProps.deleted) {
      this.props.doChangeDeleted()
    }
    this.props.doDefineOperationType('')
  }

  handleEdit = (item) => {
    this.props.doDefineOperationType('edit')
    this.props.doSelectItemToModify(item)
    this.props.doShowCreateEmployeesDialog(true)
  }

  handleAdd = () => {
    this.props.doDefineOperationType('add')
    this.props.doShowCreateEmployeesDialog(true)
  }

  handleDelete = (item) => {
    this.props.doDeleteEmployee(item)
  }

  render() {
    const noContent = this.props.items.length === 0;

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
                  <TableBody displayRowCheckbox={false} >
                    {this.props.items.map((item, k) =>
                      <TableRow key={k} >
                        <TableRowColumn className="row-center">{item.id}</TableRowColumn>
                        <TableRowColumn>{item.employee_name}</TableRowColumn>
                        <TableRowColumn className="row-center">{item.employee_registration}</TableRowColumn>
                        <TableRowColumn>{item.employee_email}</TableRowColumn>
                        <TableRowColumn>{item.departament.departament_name}</TableRowColumn>
                        <TableRowColumn className="row-center">
                          <IconButton><Edit onTouchTap={() => this.handleEdit(item)}/></IconButton>
                          <IconButton><Delete onTouchTap={() => this.handleDelete(item)}/></IconButton>
                        </TableRowColumn>
                      </TableRow>
                    )};
                  </TableBody>
                </Table>
              }
            </Paper>
          </Col>
          <Col className="col-fluid col-table-header" md={12} sm={12} xs={12}>
            <Paper className="paper-add-employees" style={styles.paper} zDepth={2} >
              <Row className="row-fluid row-employees" >
                <Col className="col-fluid col-employees" md={12} sm={12} xs={12}>
                  <ListItem
                    className="employees-title"
                    leftIcon={<Add />}
                    onTouchTap={this.handleAdd} >

                    Adicionar novo funcionário
                  </ListItem>
                </Col>
              </Row>
            </Paper>
          </Col>
        </Row>
        <CreateEmployees />
      </Grid>
    );
  }
}
