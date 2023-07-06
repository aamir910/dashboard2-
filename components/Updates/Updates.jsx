import React from 'react'
import './Updates.css'
import { UpdatesData } from '../../Data/Data'
const Updates = () => {
  return (
    <div className='updates'>

        {
            UpdatesData.map( (update)=> {
                return(

                    <div className="update">
                    <img src={update.img} alt='' />
                    <div className="notice">
                        <span> { update.name}</span>
                        <span>{update.noti}</span>
                    </div>
                    <div>
                        <span>{update.time}</span>
                    </div>

                   </div>
                       )
            } )
        }
      
 
       
    </div>
  )
}

export default Updates
  