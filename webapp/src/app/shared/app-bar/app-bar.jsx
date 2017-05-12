import React, { Component } from 'react'

import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

import Home from 'material-ui/svg-icons/action/home'
import Settings from 'material-ui/svg-icons/action/settings'
import Logout from 'material-ui/svg-icons/maps/directions-walk'
import Receive from 'material-ui/svg-icons/communication/vpn-key'
import Request from 'material-ui/svg-icons/maps/directions-car'
import History from 'material-ui/svg-icons/action/history'

import './app-bar.css'

export default class AppBar extends Component {
  adminButton = () => {
    return <ToolbarGroup>
      {this.props.user.admin &&
        <IconButton containerElement={<Link to="admin" />} >
          <Settings />
        </IconButton>
      }
      <ToolbarSeparator className="separator" />
    </ToolbarGroup>
  }

  render() {
    return (
      <div>
        {this.props.user.email !== undefined &&
          <Toolbar className="toolbar-container" >
            <ToolbarGroup firstChild={true} >
              {this.adminButton()}
              <ToolbarTitle className="toolbar-title" text={"Olá, " + this.props.user.name} />
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton
                tooltip="Informações"
                touch={true}
                tooltipPosition="bottom-center"
                containerElement={<Link to="informacoes-gerais" />}>

                <Home />
              </IconButton>
              <ToolbarSeparator className="separator" />
              <IconButton
                tooltip="Solicitar"
                touch={true}
                tooltipPosition="bottom-center"
                containerElement={<Link to="solicitar" />} >

                <Request />
              </IconButton>
              <ToolbarSeparator className="separator" />
              <IconButton
                tooltip="Receber"
                touch={true}
                tooltipPosition="bottom-center"
                containerElement={<Link to="receber" />} >

                <Receive />
              </IconButton>
              <ToolbarSeparator className="separator" />
              <IconButton
                tooltip="Histórico"
                touch={true}
                tooltipPosition="bottom-center"
                containerElement={<Link to="historico" />} >
                <History />
              </IconButton>
              <ToolbarSeparator className="separator" />
              <IconButton
                tooltip="Sair"
                touch={true}
                tooltipPosition="bottom-center"
                onTouchTap={() => this.props.doLogout()} >
                <Logout />
              </IconButton>
            </ToolbarGroup>
          </Toolbar>
        }
      </div>
    );
  }
}
