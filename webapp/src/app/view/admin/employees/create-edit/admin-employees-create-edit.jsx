import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import './admin-employees-create-edit.css'

export default class AdminEmployeesCreateEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      registration: '',
      email: '',
      department: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.type === 'edit') {
      this.setState({
        fullName: nextProps.toModify.employee_name,
        registration: nextProps.toModify.registration,
        email: nextProps.toModify.email,
        department: nextProps.toModify.department
      })
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  handleSelectionChange = (value) => {
    this.setState({ department: value })
  }

  handleSaveEmployee = () => {
    var employee = {
      name: this.state.fullName,
      registration: this.state.registration,
      email: this.state.email,
      department: this.state.department
    }

    if(this.props.type === 'add') {
      this.props.doAddNewEmployee(employee)
    }

    if(this.props.type === 'edit') {
      this.props.doEditEmployee(this.props.toModify.id, employee)
    }

    this.props.doShowCreateEmployeesDialog(false)
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancelar"
        onTouchTap={() => this.props.doShowCreateEmployeesDialog(false)}
      />,
      <RaisedButton
        label="Salvar"
        className="btn-save-create-employees"
        backgroundColor="#0D7988"
        onTouchTap={this.handleSaveEmployee}
      />,
    ];

    return (
      <div>
        {this.UpdateState}
        <Dialog
          className="create-employees-dialog"
          title="Funcionários"
          titleStyle={{color: "#0D7988"}}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={() => this.props.doShowCreateEmployeesDialog(false)} >

          <Grid className="employees-container" fluid>
            <Row className="row-fluid employees-form-content">
              <Col className="col-fluid" md={12} sm={12} xs={12} >
                <TextField
                  name="fullName"
                  defaultValue={this.props.toModify.employee_name}
                  floatingLabelText="Nome do funcionario"
                  floatingLabelStyle={{color: '#696969'}}
                  fullWidth={true}
                  onChange={this.handleInputChange} />
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12} >
                <Row className="row-fluid">
                  <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                    <TextField
                      name="registration"
                      defaultValue={this.props.toModify.registration}
                      floatingLabelText="Matrícula do funcionario"
                      floatingLabelStyle={{color: '#696969'}}
                      fullWidth={true}
                      onChange={this.handleInputChange} />
                  </Col>
                  <Col className="col-fluid" md={1} ></Col>
                  <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                    <TextField
                      name="email"
                      type="email"
                      defaultValue={this.props.toModify.email}
                      floatingLabelText="Email do funcionario"
                      floatingLabelStyle={{color: '#696969'}}
                      fullWidth={true}
                      onChange={this.handleInputChange} />
                  </Col>
                </Row>
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12} >
                <SelectField
                  name="department"
                  floatingLabelText="Departamento do funcionario"
                  defaultValue={this.props.toModify.department}
                  floatingLabelStyle={{color: '#696969'}}
                  fullWidth={true}
                  style={{textAlign: 'left'}}
                  value={this.state.department}
                  onChange={(event, key, value) => this.handleSelectionChange(value)} >

                  {this.props.items.map((item, k) =>
                    <MenuItem key={k} value={item.department_name} primaryText={item.department_name} />
                  )}

                </SelectField>
              </Col>
            </Row>
          </Grid>

        </Dialog>
      </div>
    );
  }
}
