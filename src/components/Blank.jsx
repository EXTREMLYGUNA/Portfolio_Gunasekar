/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'

function Blank() {
  return (
    <>
     <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlMbpxJChYQE67pVHcjkl2v9dTdOADDh4n4qFTfvV-3bx2p4WT_NLjg5_h6khHu6vmYyT1DK4GTGRJvFK6a4xZnOBnYZgFRmbts_Zk8vKmCmv2keEbiC4C82blDqJro3NjI3nL9UCfFFYEppXhTOI_51NsBVWqZd8I2uFCC-8E89figTSVFDTKevAbkiI/w320-h200/Colorful-Rose.jpg" alt="Colorful-Rose" className="Rose"/>
  <Link to='/blank' target='_blank' className='college' value='resume'   type='submit'>
  <div className='Education'>
     College_Placement_System <hr/>
     <div>
      <ul>
       <li><Link to='https://github.com/EXTREMLYGUNA/college_placement_recruitment' target='_blank' className='List' value='frontend'     alt='frontend_source_code'     type='submit'  >Frontend source code  </Link></li>
       <li><Link to='https://github.com/EXTREMLYGUNA/college_placement'             target='_blank' className='List' value='backend'      alt='backend_ource_code'       type='submit'  >Backend source code   </Link></li>
       <li><Link to='https://college-placement-hnqx.onrender.com'                   target='_blank' className='List' value='backend_url'  alt='backend_url'              type='submit'  >Backend Deployed url  </Link></li>
       <li><Link to='https://college-placement-recruitment.netlify.app'             target='_blank' className='List' value='frontend_url' alt='frontend_url'             type='submit'  >Frontend Deployed url </Link></li>
      </ul>
     </div>
   </div>
  </Link>
 
 </>
  )
}

export default Blank
