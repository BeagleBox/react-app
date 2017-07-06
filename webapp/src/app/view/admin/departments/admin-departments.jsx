import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import {ListItem} from 'material-ui/List'
import CreateDepartments from './create-edit'

import Edit from 'material-ui/svg-icons/action/settings'
import Delete from 'material-ui/svg-icons/action/delete'
import Add from 'material-ui/svg-icons/content/add-circle'

import './admin-departments.css'

export default class AdminDepartments extends Component {
  componentWillMount() {
    this.props.doGetAllDepartments()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.created) {
      this.props.doChangeCreated()
      this.props.doGetAllDepartments()
    }
    if(nextProps.edited) {
      this.props.doChangeEdited()
      this.props.doGetAllDepartments()
      this.props.doSelectItemToModify('')
    }
    if(nextProps.deleted) {
      this.props.doChangeDeleted()
      this.props.doGetAllDepartments()
    }
    this.props.doDefineOperationType('')
  }

  handleEdit = (item) => {
    this.props.doDefineOperationType('edit')
    this.props.doSelectItemToModify(item)
    this.props.doShowCreateDepartmentsDialog(true)
  }

  handleAdd = () => {
    this.props.doDefineOperationType('add')
    this.props.doShowCreateDepartmentsDialog(true)
  }

  handleDelete = (item_id) => {
    this.props.doDeleteDepartment(item_id)
  }

  render() {
    const noContent = this.props.items.length === 0;

    const styles = {
      table: { fontWeight: 'bold', color: '#2F4F4F'},
      paper: { width: '95%', margin: 'auto', padding: '2em', maxHeight: '65vh', overflowY: 'auto'},
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
                      <TableHeaderColumn style={styles.table}>Nome</TableHeaderColumn>
                      <TableHeaderColumn className="row-center" style={styles.table}>Ações</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false} >
                    {this.props.items.map((item, k) =>
                      <TableRow key={k} >
                        <TableRowColumn>{item.departament_name}</TableRowColumn>
                        <TableRowColumn className="row-center">
                          <IconButton><Edit onTouchTap={() => this.handleEdit(item)}/></IconButton>
                          <IconButton><Delete onTouchTap={() => this.handleDelete(item.id)}/></IconButton>
                        </TableRowColumn>
                      </TableRow>
                    )};
                  </TableBody>
                </Table>
              }
            </Paper>
          </Col>
          <Col className="col-fluid col-table-header" md={12} sm={12} xs={12}>
            <Paper className="paper-add-department" style={styles.paper} zDepth={2} >
              <Row className="row-fluid row-department" >
                <Col className="col-fluid col-department" md={12} sm={12} xs={12}>
                  <ListItem
                    className="department-title"
                    leftIcon={<Add />}
                    onTouchTap={this.handleAdd} >
                    Adicionar novo departamento
                  </ListItem>
                </Col>
              </Row>
            </Paper>
          </Col>
        </Row>
        <CreateDepartments />
      </Grid>
    );
  }
}
