import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import GroupWork from 'material-ui/svg-icons/action/group-work'
import Work from 'material-ui/svg-icons/action/work'
import Face from 'material-ui/svg-icons/action/supervisor-account'
import Layers from 'material-ui/svg-icons/maps/layers'

import assets from './assets'
import './admin.css'

export default class Administrator extends Component {
  render() {
    return (
      <Grid className="admin-container" fluid>
        <Row className="row-fluid admin-content">
          <Col className="col-fluid" md={2} sm={3} xs={3} >
            <Drawer className="drawer-admin-content" open={true} width={"18%"}>
              <Menu className="admin-menu">
                <MenuItem className="admin-menu-item" leftIcon={<GroupWork />}>BeagleBox</MenuItem>
                <MenuItem className="admin-menu-item" leftIcon={<Work />}>Departamentos</MenuItem>
                <MenuItem className="admin-menu-item" leftIcon={<Face />}>Funcionários</MenuItem>
                <MenuItem className="admin-menu-item" leftIcon={<Layers />}>Envios e Cargas</MenuItem>
              </Menu>
            </Drawer>
          </Col>
          <Col className="col-fluid" md={10} sm={9} xs={9} >
            <Row className="row-fluid">
              <Col className="col-fluid col-image" md={12} sm={12} xs={12}>
                <img className="img-admin" src={assets.admin} alt="Ícone de Adminstrador" />
              </Col>
              <Col className="col-fluid" md={12} sm={12} xs={12}>
                <h1>Bem-vindo(a)</h1>
                <h2>Área exclusiva para administração</h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
