import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import GroupWork from 'material-ui/svg-icons/action/group-work'
import Work from 'material-ui/svg-icons/action/work'
import Face from 'material-ui/svg-icons/action/supervisor-account'
import Layers from 'material-ui/svg-icons/maps/layers'

import Welcome from './welcome'
import BeagleBox from  './beagle-box'
import Departments from './departments'
import Employees from './employees'
import Reports from './reports'

import './admin.css'

export default class Administrator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: Welcome,
    }
  }

  handleChange = (layer) => {
    this.setState({ content: layer })
  }

  render() {
    return (
      <Grid className="admin-container" fluid>
        <Row className="row-fluid admin-content">
          <Col className="col-fluid" md={2} sm={3} xs={3} >
            <Drawer className="drawer-admin-content" open={true} width={"18%"}>
              <Menu className="admin-menu">
                <MenuItem
                  className="admin-menu-item"
                  leftIcon={<GroupWork />}
                  onTouchTap={() => this.handleChange(BeagleBox)} >
                    BeagleBox
                </MenuItem>
                <MenuItem
                  className="admin-menu-item"
                  leftIcon={<Work />}
                  onTouchTap={() => this.handleChange(Departments)} >
                    Departamentos
                </MenuItem>
                <MenuItem
                  className="admin-menu-item"
                  leftIcon={<Face />}
                  onTouchTap={() => this.handleChange(Employees)} >
                    Funcionários
                </MenuItem>
                <MenuItem
                  className="admin-menu-item"
                  leftIcon={<Layers />}
                  onTouchTap={() => this.handleChange(Reports)} >
                    Envios e Cargas
                </MenuItem>
              </Menu>
            </Drawer>
          </Col>
          <Col className="col-fluid" md={10} sm={9} xs={9} >
            {<this.state.content />}
          </Col>
        </Row>
      </Grid>
    );
  }
}
