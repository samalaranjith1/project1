import React from 'react'
import Appstore from './Appstore'
import Playstore from './Playstore'

function Download() {
  return (
    <div>
        <li className="dropdown hover">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Download
            <span className="caret"></span></a>
            <ul className="dropdown-menu text-center">
                <li className='text-center'><Appstore /></li>
                <li className='text-center'><Playstore /></li> 
            </ul>
        </li>
    </div>
  )
}

export default Download