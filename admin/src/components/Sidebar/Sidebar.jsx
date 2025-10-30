import React from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add item</p>
            </div>
             <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List items</p>
            </div>
             <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Sidebar
