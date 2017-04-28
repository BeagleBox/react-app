import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

import './app-bar.css'

export default class Homepage extends Component {
  render() {
    return (
      <Toolbar style={{backgroundColor: '#808080'}}>
        <ToolbarGroup firstChild={true} >
          <ToolbarTitle className="toolbar-title" text="Olá, Secretaria" />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label="Solicitar" default={true} />
          <ToolbarSeparator className="separator" />
          <RaisedButton label="Receber" default={true} />
          <ToolbarSeparator className="separator" />
          <RaisedButton label="Histórico" default={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
