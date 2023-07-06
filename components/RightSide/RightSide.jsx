import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
const  RightSide = () => {
  return (
           <div className='Rightside'>
          <div className="updatesMain">
            <h3>Updates</h3>

            
            <Updates/>
          </div>
          <div className="review">

               <h3>
                Customer review   
               </h3>

          </div>
           </div>
  )
}

export default RightSide
