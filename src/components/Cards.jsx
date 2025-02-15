/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <>
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlMbpxJChYQE67pVHcjkl2v9dTdOADDh4n4qFTfvV-3bx2p4WT_NLjg5_h6khHu6vmYyT1DK4GTGRJvFK6a4xZnOBnYZgFRmbts_Zk8vKmCmv2keEbiC4C82blDqJro3NjI3nL9UCfFFYEppXhTOI_51NsBVWqZd8I2uFCC-8E89figTSVFDTKevAbkiI/w320-h200/Colorful-Rose.jpg" alt="Colorful-Rose" className="Rose"/>
  <div className='Cover'>
  <Link to='/' target='_self' title={"Name : GUNASEKAR"} className='Detail'>
  <img title='GUNASEKAR' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgQrmj22EB4smon4J4WbjeckO53X47BskV5LhY_eTpVEn8rw_xKyoL2-RC2W6iSoXmQmfcLPmsbxLkJ3nD_C4F8yc8ZSPdGVl5x7wuM1HDdKhWjKFqdv6Aj0Wy5vOvWTaAteleqMpdEe_zWlUPg8sYfrwqn-TS8uUBsK17xgT0gpzyApLGz2kgxrzVVbw/w302-h320/GUNASEKAR.jpg' alt='Gunasekar' className='Guna'/><div className='Name'><h3>GUNASEKAR.V</h3></div>
  </Link>
  </div>
  <div>
    <Link title='Resume' to='/blank' target='_blank' className='Resume'>Check Resume</Link>
  </div>
  <div className='Education'>
    Educational details :<hr/>
    <div>
     <ul>
      <li><Link to='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqb_IMCgZXlIaLpLQqjdaPda234rEpSf9lA6RWTlpchrn8AyXAZjTdadtugppqpNyE7t_6FtyyGTvDD7IVqPa9r1268jDJEUjjQIYNFZZL_VOzNrKmBFwbrL4sRCI6_4B_fp0WSUIt1FamdFLojOMqwQ_3DF1EfJ9qm0FEigJldOJIqydrGk-jwa6Y2Wo/s9216/SSLC.jpg'                  target='_blank' className='List' value='SSLC'   alt='SSLC'     type='submit'  >SSLC         </Link></li>
      <li><Link to='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl7Vs0Djp18lrvYgGZfV39rK3DHOvaLDWo-IMcxLyT2xn-iNwQ1rTj6zFvpGpgzF5Msdw2V9ksy75d-dCZ7OrAynbDnVkyBvwmMBEJP-sBYrjwEbiUmX-ZFVnqqaOwDFDBKl7q_YIZaUIke-r3ODltHCeuAGhrtBep5bAhP7K2nGuMaC0J_O-DckbbOpQ/s8941/HSC.jpg'                   target='_blank' className='List' value='HSCC'   alt='HSC'      type='submit'  >HSCC         </Link></li>
      <li><Link to='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5jHNX_3Yhka3__0f19BUlb8Y52F8lKEawcJ-X69Yplx8r53K9clBTgZq2bi-gxQ81QrkNmoQFcMQhoQER3RMR_oi7oELKlo6QJVftle5ZvmhqeCXh4xHbJp97dncfJwc4_k-HQPxTpJlD5qRwjB9y5DDufyRQ-MvbjUB1QAuHeM1KBRmi9Hs_eOmZ2R4/s4080/Diploma%20Certificate.jpg' target='_blank' className='List' value='DIPLOMA'alt='DIPLOMA'  type='submit'  >DIPLOMA(EEE) </Link>⇨<Link to='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ_XCS1o21jhGLrpJKzutV2dWkSfhwnGtSvLwKAPkQBAQUOngB9vD6NK4A4XKg04hHmpx4yIioo0rKnfNM2tSpNrGeRV5MlQ_RCMNVChzo3HPvj5zLoVXE0NgmyET-6s5reYRyWLK2DXP_UWWqS078ee0-A35Fa1z8DDcF0jaNnW1v8JtIX0v39HLl_ZI/s3894/DIPLOMA.jpg' target='_blank' className='List' value='Consolidate'   name='list' type='submit' >Consolidate  </Link></li>
      <li><Link to='B.tech'                              target='_blank' className='List' value='B.TECH' alt='B.TECH'   type='submit'  >B.TECH(EEE)  </Link></li>
     </ul>
    </div>
  </div>
  <div className='Projects'>
    Projects :<hr/>
    <div>
     <ul>
      <li><Link to='https://guna-callback.netlify.app'             target='_blank' className='List' value='Callback'   type='submit' >Callback function </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/CALL-BACK-HELL'         target='_blank' className='List' value='Callback'     name='list' type='submit' >View code  </Link></li>
      <li><Link to='https://price-cards-projects.netlify.app'      target='_blank' className='List' value='Price-card' type='submit' >Price-card        </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/Price-cards'            target='_blank' className='List' value='Price-card'   name='list' type='submit' >View code  </Link></li>
      <li><Link to='https://shopping-card-projects.netlify.app'    target='_blank' className='List' value='Callback'   type='submit' >Shopping-card     </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/Shopping-card'          target='_blank' className='List' value='Callback'     name='list' type='submit' >View code  </Link></li>
      <li><Link to='https://react-router-dom-projects.netlify.app' target='_blank' className='List' value='Callback'   type='submit' >React-Router      </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/React-Router-Dom'       target='_blank' className='List' value='React-Router' name='list' type='submit' >View code  </Link></li>
      <li><Link to='https://react-usecontextt.netlify.app'         target='_blank' className='List' value='Callback'   type='submit' >React-usecontext  </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/React-useContext-Task'  target='_blank' className='List' value='Callback'     name='list' type='submit' >View code  </Link></li>
      <li><Link to='https://landing-page-guvi.netlify.app'         target='_blank' className='List' value='Callback'   type='submit' >Landing-page      </Link> ⇨<Link to='https://github.com/GunasekarRanjitham/Landing-page'           target='_blank' className='List' value='Callback'     name='list' type='submit' >View code  </Link></li>
     </ul>
    </div>
    <span className="loader"></span>
  </div>
 
    </>
  )
}

export default Cards
