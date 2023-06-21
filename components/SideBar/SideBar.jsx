import React from 'react'
import logo from  '../../imgs/logo.png'
import  './SideBar.css'
function SideBar() {
  return (
    <div className='Sidebar'>
      <div className="logo">
      <img src={logo} alt="" />
       <span> Sh<span>0</span>ps</span>
      </div>
    </div>
  )
}

export default SideBar
