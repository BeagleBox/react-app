import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import Work from 'material-ui/svg-icons/action/work'
import Face from 'material-ui/svg-icons/action/supervisor-account'
import Layers from 'material-ui/svg-icons/maps/layers'

import AccessDenied from '../../shared/access-denied'
import './admin.css'

export default class Administrator extends Component {
  render() {
    return (
      <Grid className="admin-container" fluid>
        {this.props.user.is_admin &&
        <Row className="row-fluid admin-content">
          <Col className="col-fluid" md={2} sm={3} xs={3} >
            <Drawer className="drawer-admin-content" open={true} width={"18%"}>
              <Menu className="admin-menu">
                <MenuItem
                  className="admin-menu-item"
                  leftIcon={<Work />}
                  containerElement={<Link to="admin/departamentos" />} >
                    Departamentos
                </MenuItem>
                <MenuItem
                  className="admin-menu-item"
                  leftIcon={<Face />}
                  containerElement={<Link to="admin/funcionarios" />} >
                    Funcionários
                </MenuItem>
                <MenuItem
                  className="admin-menu-item"
                  leftIcon={<Layers />}
                  containerElement={<Link to="admin/relatorios" />} >
                    Envios e Cargas
                </MenuItem>
              </Menu>
            </Drawer>
          </Col>
          <Col className="col-fluid" md={10} sm={9} xs={9} >
            {this.props.children}
          </Col>
        </Row> }
        {!this.props.user.is_admin &&
          <AccessDenied />
        }
      </Grid>
    );
  }
}
