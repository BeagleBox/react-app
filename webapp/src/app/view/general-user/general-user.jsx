import React, { Component } from 'react'
import { Grid} from 'react-flexbox-grid'

import NotFound from '../../shared/not-found'

export default class GeneralUser extends Component {
  render() {
    return (
      <Grid className="container" fluid>
        {this.props.token !== '' &&
          this.props.children
        }
        {this.props.token === '' &&
          <NotFound />
        }
      </Grid>
    );
  }
}
