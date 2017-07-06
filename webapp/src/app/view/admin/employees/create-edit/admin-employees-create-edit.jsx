import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import InputMask from 'react-input-mask'

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
      employee_name: '',
      employee_registration: '',
      email: '',
      departament_id: '',
      department: '',
      contact_description: '',
      password: '',
      password_confirmation: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.props.doGetAllDepartments()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.type === 'edit' && nextProps.toModify !== "") {
      this.setState({
        employee_name: nextProps.toModify.employee_name,
        registration: nextProps.toModify.employee_registration,
        email: nextProps.toModify.employee_email,
        departament_id: nextProps.toModify.departament.id,
        department: nextProps.toModify.departament.departament_name,
        contact_description: nextProps.toModify.contacts[0].description,
      })
    }
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    if(name === 'contact_description') {
      value = value.replace(/[^\w\s]/gi, '')
      value = value.replace(/\s/g, '')
    }

    this.setState({
      [name]: value
    })
  }

  handleSelectionChange = (event, key, value) => {
    this.setState({ departament_id: value, department: event.target.innerText})
  }

  handleSaveEmployee = () => {
    var employee = {
      employee_name: this.state.employee_name,
      employee_registration: this.state.registration,
      employee_email: this.state.email,
      departament_id: this.state.departament_id,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      contact_description: this.state.contact_description,
    }

    if(this.props.type === 'add') {
      this.props.doAddNewEmployee(employee)
    }

    if(this.props.type === 'edit') {
      this.props.doEditEmployee(this.props.toModify.id, employee)
    }

    this.props.doShowCreateEmployeesDialog(false)
  }

  handleCancel = () => {
    this.props.doSelectItemToModify('')
    this.props.doShowCreateEmployeesDialog(false)
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancelar"
        onTouchTap={this.handleCancel}
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
                <Row className="row-fluid">
                  <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                    <TextField
                      name="employee_name"
                      defaultValue={this.props.toModify.employee_name}
                      floatingLabelText="Nome do funcionario"
                      floatingLabelStyle={{color: '#696969'}}
                      fullWidth={true}
                      onChange={this.handleInputChange} />
                  </Col>
                  <Col className="col-fluid" md={1} ></Col>
                  <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                    <TextField
                      name="registration"
                      defaultValue={this.props.toModify.employee_registration}
                      floatingLabelText="Matrícula do funcionario"
                      floatingLabelStyle={{color: '#696969'}}
                      fullWidth={true}
                      onChange={this.handleInputChange} />
                  </Col>
                </Row>
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12} >
                <Row className="row-fluid">
                  <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                    <TextField
                      name="email"
                      type="email"
                      defaultValue={this.props.toModify.employee_email}
                      floatingLabelText="Email do funcionario"
                      floatingLabelStyle={{color: '#696969'}}
                      fullWidth={true}
                      onChange={this.handleInputChange} />
                  </Col>
                  <Col className="col-fluid" md={1} ></Col>
                  {this.props.toModify.contacts !== undefined &&
                    <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                      <TextField
                        floatingLabelText="Celular do funcionario"
                        floatingLabelStyle={{color: '#696969'}}
                        fullWidth={true} >
                        <InputMask
                          name="contact_description"
                          defaultValue={this.props.toModify.contacts[0].description}
                          onChange={this.handleInputChange}
                          mask="+55 (99) \9 9999-9999" maskChar=" " />
                      </TextField>
                    </Col>
                  }
                  {this.props.type !== 'edit' &&
                    <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                      <TextField
                        floatingLabelText="Celular do funcionario"
                        floatingLabelStyle={{color: '#696969'}}
                        fullWidth={true}
                        vallue={this.state.contact_description} >
                        <InputMask
                          name="contact_description"

                          onChange={this.handleInputChange}
                          mask="+55 (99) \9 9999-9999" maskChar=" " />
                      </TextField>
                    </Col>
                  }
                </Row>
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12} >
                <SelectField
                  name="departament_id"
                  floatingLabelText="Departamento do funcionario"
                  defaultValue={this.props.toModify.departament}
                  floatingLabelStyle={{color: '#696969'}}
                  fullWidth={true}
                  style={{textAlign: 'left'}}
                  value={this.state.departament_id}
                  onChange={(event, key, value) => this.handleSelectionChange(event, key, value)} >

                  {this.props.items.map((item, k) =>
                    <MenuItem
                      key={item.departament_name}
                      value={item.id}
                      primaryText={item.departament_name} />
                  )}

                </SelectField>
              </Col>
              {this.props.type === 'add' &&
                <Col className="col-fluid" md={12} sm={12} xs={12} >
                  <Row className="row-fluid">
                    <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                      <TextField
                        name="password"
                        type="password"
                        floatingLabelText="Senha de acesso"
                        floatingLabelStyle={{color: '#696969'}}
                        fullWidth={true}
                        onChange={this.handleInputChange} />
                    </Col>
                    <Col className="col-fluid" md={1} ></Col>
                    <Col className="col-fluid" md={5.5} sm={12} xs={12} >
                      <TextField
                        name="password_confirmation"
                        type="password"
                        floatingLabelText="Confirmação de senha"
                        floatingLabelStyle={{color: '#696969'}}
                        fullWidth={true}
                        onChange={this.handleInputChange} />
                    </Col>
                  </Row>
                </Col>
              }
            </Row>
          </Grid>

        </Dialog>
      </div>
    );
  }
}
