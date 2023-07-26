import React,{useContext} from 'react'
import CartItems from './CartItems'
import Checkout from './Checkout'
import { Context } from '../Context/Context'
const Cart = () => {
const {cartData} = useContext(Context)
  return (
    <div >Cart
      {cartData.map((items,index)=>{
        const {id,name,price,pic,qty} = items
        return(
          <CartItems 
          key={index}
          id={id}
          name={name}
          price={price}
          pic={pic}
          qty={qty} />
        )
        
      })}
      
      <Checkout cartData={cartData}/>

    </div>
  )
}

export default Cart