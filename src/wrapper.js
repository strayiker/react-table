import React, { Component, PropTypes } from 'react'


export default class ReactTableWrapper extends Component {
  static propTypes = {
    wrapperRef: PropTypes.func.isRequired
  }

  render () {
    return (
      <div ref={this.props.wrapperRef} className='rt-table-wrapper'>
        {this.props.children}
      </div>
    )
  }
}
