import React, { Component } from 'react'
import loading from '../loading-2.gif' 

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center mb-3'>
        <img className='my-3' src={loading} alt="Loading..." />
      </div>
    )
  }
}

export default Spinner