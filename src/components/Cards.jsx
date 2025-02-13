/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <>
    <img src="./src/assets/Colorful-Rose.jpg" alt="Colorful-Rose" className="Rose"/>
  <div className='Cover'>
  <Link to='/' target='_self' title={"Name : GUNASEKAR"} className='Detail'>
  <img title='GUNASEKAR' src='./src/assets/GUNASEKAR.jpg' alt='Gunasekar' className='Guna'/><div className='Name'><h3>GUNASEKAR.V</h3></div>
  </Link>
  </div>
  <div>
    <Link title='Resume' to='/src/assets/GUNASEKAR.pdf' target='_blank' className='Resume'>Check Resume</Link>
  </div>
  <div className='Education'>
    Educational details :<hr/>
    <div>
     <ul>
      <li><Link to='/src/assets/SSLC.jpg'                target='_blank' className='List' value='SSLC'    name='list' type='submit'  >SSLC         </Link></li>
      <li><Link to='/src/assets/HSC.jpg'                 target='_blank' className='List' value='HSCC'    name='list' type='submit'  >HSCC         </Link></li>
      <li><Link to='/src/assets/Diploma Certificate.jpg' target='_blank' className='List' value='DIPLOMA' name='list' type='submit'  >DIPLOMA(EEE) </Link></li>
      <li><Link to='B.tech'                               target='_blank' className='List' value='B.TECH'  name='list' type='submit'  >B.TECH(EEE)  </Link></li>
     </ul>
    </div>
  </div>
  <div className='Projects'>
    Projects :<hr/>
    <div>
     <ul>
      <li><Link to='https://guna-callback.netlify.app'         target='_blank' className='List' value='Callback'    name='list' type='submit' >Callback function </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/CALL-BACK-HELL' target='_blank' className='List' value='Callback'   name='list' type='submit' >View code  </Link></li>
      <li><Link to='https://price-cards-projects.netlify.app'   target='_blank' className='List' value='Price-card'  name='list' type='submit' >Price-card        </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/Price-cards'    target='_blank' className='List' value='Price-card' name='list' type='submit' >View code  </Link></li>
      <li><Link to='https://shopping-card-projects.netlify.app' target='_blank' className='List' value='Callback'    name='list' type='submit' >Shopping-card     </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/Shopping-card'  target='_blank' className='List' value='Callback'   name='list' type='submit' >View code  </Link></li>
     </ul>
    </div>
    <span className="loader"></span>
  </div>
  {/* <div className='blank'>
      Projection Here
      <hr/>
    </div> */}
    </>
  )
}

export default Cards
