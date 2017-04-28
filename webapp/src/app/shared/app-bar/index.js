import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import Home from 'material-ui/svg-icons/action/home'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

import './app-bar.css'

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Elaine Meirelles'
      },
    }
  }

  render() {
    return (
      <div>
        {this.state.user.name !== '' &&
          <Toolbar style={{backgroundColor: '#808080'}}>
            <ToolbarGroup firstChild={true} >
              <ToolbarTitle className="toolbar-title" text={"Olá, " + this.state.user.name} />
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton href="/#/informacoes-gerais">
                <Home />
              </IconButton>
              <ToolbarSeparator className="separator" />
              <FlatButton
                backgroundColor="#CCC"
                hoverColor="#DCDCDC"
                label="Solicitar"
                href="/#/solicitar" />
              <ToolbarSeparator className="separator" />
              <FlatButton
                backgroundColor="#CCC"
                hoverColor="#DCDCDC"
                label="Receber"
                href="/#/receber" />
              <ToolbarSeparator className="separator" />
              <FlatButton
                backgroundColor="#CCC"
                hoverColor="#DCDCDC"
                label="Histórico"
                href="/#/historico" />
            </ToolbarGroup>
          </Toolbar>
        }
      </div>
    );
  }
}
