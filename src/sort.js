import React, { Component, PropTypes } from 'react'
import classnames from 'classnames';


export default class SortOrder extends Component {
  static propTypes = {
    desc: PropTypes.bool
  }

  render () {
    const { desc } = this.props;

    const orderClasses = classnames({
      'rt-sort-desc': desc,
      'rt-sort-asc': !desc
    })

    return (
      <div className='rt-sort'>
        <div className={orderClasses} />
      </div>
    )
  }
}
