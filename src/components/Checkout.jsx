import React from 'react'

const Checkout = ({cartData}) => {
  
    const totalamount = cartData.map(val=>val.price * val.qty).reduce((acc,cur)=>
        acc+cur,0)
    const totalItems = cartData.map(val=>val.qty).reduce((acc,cur)=>acc+cur,0)
    
  return (
    <div>
        <h3>Checkout Details</h3><hr />
        <p>Items : {totalItems}</p>
        <p>Amount to be paid : Rs.{totalamount}</p>
    </div>
  )
}

export default Checkout