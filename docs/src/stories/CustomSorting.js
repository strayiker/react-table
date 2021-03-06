/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import _ from 'lodash'
import namor from 'namor'

import ReactTable from '../../../lib/index'

class Story extends React.PureComponent {
  render () {
    const data = _.map(_.range(5553), d => {
      return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30)
      }
    })

    const columns = [{
      Header: 'Name',
      columns: [{
        Header: 'First Name (Sorted by Length, A-Z)',
        accessor: 'firstName',
        sortMethod: (a, b) => {
          if (a.length === b.length) {
            return a > b ? 1 : -1
          }
          return a.length > b.length ? 1 : -1
        }
      }, {
        Header: 'Last Name (Sorted in reverse, A-Z)',
        id: 'lastName',
        accessor: d => d.lastName,
        sortMethod: (a, b) => {
          if (a === b) {
            return 0
          }
          const aReverse = a.split('').reverse().join('')
          const bReverse = b.split('').reverse().join('')
          return aReverse > bReverse ? 1 : -1
        }
      }]
    }, {
      Header: 'Info',
      columns: [{
        Header: 'Age',
        accessor: 'age'
      }]
    }]

    return (
      <div>
        <div className='table-wrap'>
          <ReactTable
            className='-striped -highlight'
            data={data}
            columns={columns}
            defaultPageSize={10}
          />
        </div>
        <div style={{textAlign: 'center'}}>
          <br />
          <em>Tip: Hold shift when sorting to multi-sort!</em>
        </div>
      </div>
    )
  }
}

// Source Code
const CodeHighlight = require('./components/codeHighlight').default
const source = require('!raw!./CustomSorting')

export default () => (
  <div>
    <Story />
    <CodeHighlight>{() => source}</CodeHighlight>
  </div>
)
