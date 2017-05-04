import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import './admin-departments-create-edit.css'

export default class AdminDepartmentsCreateEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      department: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({ department: event.target.value })
  }

  handleSaveDepartment = () => {
    this.props.doAddNewDepartment(this.state.department)
    this.props.doShowCreateDepartmentsDialog(false)
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancelar"
        onTouchTap={() => this.props.doShowCreateDepartmentsDialog(false)}
      />,
      <RaisedButton
        label="Salvar"
        className="btn-save-create-departments"
        backgroundColor="#0D7988"
        onTouchTap={this.handleSaveDepartment}
      />,
    ];

    return (
      <div>
        <Dialog
          className="create-departments-dialog"
          title="Adicionar novo departamento"
          titleStyle={{color: "#0D7988"}}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={() => this.props.doShowCreateDepartmentsDialog(false)} >

            <TextField
              floatingLabelText="Nome do departamento"
              onChange={this.handleInputChange} />

        </Dialog>
      </div>
    );
  }
}
