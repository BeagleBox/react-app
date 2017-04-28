import React, { Component } from 'react'

export default class ContentArea extends Component {
  render() {
    return (
      <div className='main-area-container'>
        {this.props.children}
      </div>
    );
  }
}

ContentArea.PropTypes = {
  children: React.PropTypes.element.isRequired,
}
