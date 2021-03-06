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

  componentWillReceiveProps(nextProps) {
    if(nextProps.type === 'edit') {
      this.setState({
        department: nextProps.toModify.departament_name
      })
    }
  }

  handleInputChange = (event) => {
    this.setState({ department: event.target.value })
  }

  handleSaveDepartment = () => {
    if(this.props.type === 'add') {
      this.props.doAddNewDepartment(this.state.department)
    }

    if(this.props.type === 'edit') {
      this.props.doEditDepartment(this.props.toModify.id, this.state.department)
    }

    this.props.doShowCreateDepartmentsDialog(false)
  }

  handleCancel = () => {
    this.props.doShowCreateDepartmentsDialog(false)
    this.props.doSelectItemToModify('')
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancelar"
        onTouchTap={this.handleCancel}
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
          title="Departamento"
          titleStyle={{color: "#0D7988"}}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={() => this.props.doShowCreateDepartmentsDialog(false)} >

            <TextField
              floatingLabelText="Nome do departamento"
              defaultValue={this.props.toModify.departament_name}
              onChange={this.handleInputChange} />

        </Dialog>
      </div>
    );
  }
}
