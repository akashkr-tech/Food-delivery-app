import React from 'react'
import './Verify.css'
import { useSearchParams } from 'react-router-dom';

const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const succes = searchParams.get("success")
      const orderId = searchParams.get("orderId")
  return (
    <div>
      
    </div>
  )
}

export default Verify
