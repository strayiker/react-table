import React, { Component } from 'react'


export default class ReactTableWrapper extends Component {
  render () {
    return (
      <div className='rt-table-wrapper'>{this.props.children}</div>
    )
  }
}
