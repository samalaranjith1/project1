 import React from 'react'
 import Logo from './Logo'
 import Title from './Title'
 import LoginRegister from './LoginRegister'
 import Download from './download/Download'
 import Appstore from './download/Appstore'
 import Playstore from './download/Playstore'
 
 function Container() {
   return (
     <div>
        {/* <nav class="navbar navbar-dark bg-primary"> */}
        <div className='row container text-center col-container'>
        <ul className='list-inline container col'>
                <div className='col-sm-2 col'><li><Logo /></li></div>
                <div className='col-sm-6 col'><li><Title /></li></div>
                <div className='col-sm-2 col'><li><LoginRegister /></li></div>
                <div className='col-sm-2 col hover'>
                  <Download />
                </div>
            </ul>     
        </div>
        {/* </nav> */}
     </div>

   )
 }
 
 export default Container