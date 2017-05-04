import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

import Home from 'material-ui/svg-icons/action/home'
import Settings from 'material-ui/svg-icons/action/settings'
import Logout from 'material-ui/svg-icons/maps/directions-walk'

import './app-bar.css'

export default class AppBar extends Component {
  adminButton = () => {
    return <ToolbarGroup>
      {this.props.user.admin &&
        <IconButton containerElement={<Link to="informacoes-gerais" />} >
          <Settings />
        </IconButton>
      }
      <ToolbarSeparator className="separator" />
    </ToolbarGroup>
  }

  render() {
    return (
      <div>
        {this.props.user.email !== '' &&
          <Toolbar className="toolbar-container" >
            <ToolbarGroup firstChild={true} >
              {this.adminButton()}
              <ToolbarTitle className="toolbar-title" text={"Olá, " + this.props.user.name} />
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton containerElement={<Link to="informacoes-gerais" />}>
                <Home />
              </IconButton>
              <ToolbarSeparator className="separator" />
              <FlatButton
                backgroundColor="#CCC"
                hoverColor="#DCDCDC"
                label="Solicitar"
                containerElement={<Link to="solicitar" />} />
              <ToolbarSeparator className="separator" />
              <FlatButton
                backgroundColor="#CCC"
                hoverColor="#DCDCDC"
                label="Receber"
                containerElement={<Link to="receber" />} />
              <ToolbarSeparator className="separator" />
              <FlatButton
                backgroundColor="#CCC"
                hoverColor="#DCDCDC"
                label="Histórico"
                containerElement={<Link to="historico" />} />
              <ToolbarSeparator className="separator" />
              <IconButton tooltip="Sair" containerElement={<Link to="inicio" />} >
                <Logout />
              </IconButton>
            </ToolbarGroup>
          </Toolbar>
        }
      </div>
    );
  }
}
