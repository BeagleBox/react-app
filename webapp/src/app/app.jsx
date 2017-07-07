import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import AppBar from './shared/app-bar'

import './app.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  componentWillMount() {
    if(localStorage.user !== null) {
      this.props.onInitiallize()
    }
  }

  render() {
    const muiTheme = getMuiTheme({
      fontFamily: 'Lora, serif'
    })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app-container'>
          <AppBar />
          <div className='main-area-container'>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
