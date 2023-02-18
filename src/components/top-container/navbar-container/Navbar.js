
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Programmes from './Programmes'
import WhyUs from './WhyUs'
import Members from './Members'
import SuccessStories from './SuccessStories'
import Services from './Services'
import ContactUs from './ContactUs'
import HelpLine from './HelpLine'
import Layout from './Layout'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
    <BrowserRouter>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify'>
        <ul className='nav navbar-nav justify'>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>  
            <Link to="/programmes">Programmes</Link>
          </li>
          <li>
            <Link to="/whyUs">Why Us</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/successstories">Success Stories</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contactus">Contac tUs</Link>
          </li>
          <li>
            <Link to="/helpline">HelpLine</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      {<Route path="/" element={<Layout />} />}
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/aboutus' element={<AboutUs />} />
      <Route exact path='/programmes' element={<Programmes />} />
      <Route exact path='/whyUs' element={<WhyUs />} />
      <Route exact path='/members' element={<Members />} />
      <Route exact path='/successstories' element={<SuccessStories />} />
      <Route exact path='/services' element={<Services />} />
      <Route exact path='/contactus' element={<ContactUs />} />
      <Route exact path='/helpline' element={<HelpLine />} />
      <Route path='*' element={ <h1>The page you are trying to load is not avaialable.Please contact admin. Thanks for you patience</h1> }></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Navbar