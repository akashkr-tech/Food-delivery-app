import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import "./MyOrders.css"
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const {url,token} = useContext(StoreContext);
    const  [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        
        console.log("Raw data from backend:", response.data.data);
        console.log("Total orders from backend:", response.data.data.length);
        
        // Check karo dono orders ka _id
        response.data.data.forEach((order, index) => {
            console.log(`Order ${index} ID:`, order._id);
        });
        
        // Duplicate orders remove karo by unique _id
        const uniqueOrders = response.data.data.filter((order, index, self) =>
            index === self.findIndex((o) => o._id === order._id)
        );
        
        console.log("Unique orders after filter:", uniqueOrders);
        console.log("Unique orders count:", uniqueOrders.length);
        
        setData(uniqueOrders);
    }

    useEffect(()=>{
        if(token){
          fetchOrders();
        }
    },[token])
    
  return (
    <div className='my-orders'>
       <h2>My Orders</h2>
       <div className="container">
        {data.map((order,index)=>{
            return(
                <div key={order._id} className="my-orders-order">
                      <img src={assets.parcel_icon} alt="" />
                      <p>{order.items.map((item,idx)=>{
                        if(idx === order.items.length-1){
                          return item.name+" x "+item.quantity
                        }
                        else{
                          return item.name+" x "+item.quantity + ", "
                        }
                      })}</p>
                      <p>${order.amount}</p>
                      <p>Items:{order.items.length}</p>
                      <p><span>&#x25cf;</span><b>{order.status}</b></p>
                      <button>Track order</button>
                </div>
            )
        })}
       </div>
    </div>
  )
}

export default MyOrders