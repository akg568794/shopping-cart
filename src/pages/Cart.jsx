import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../Components/CartItem'

export default function Cart() {
  const {cart}=useSelector((state)=>state)
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    // Calculating total amount using reduce function
  },[cart])
  return (
    <div>
      {
        cart.length>0 ? (
        <div>
            <div>
          {cart.map((item,index)=>{
            return <CartItem key={item.id} item={item} itemIndex={index}/>
          })}
        </div>
        <div>
          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items: {cart.length}</span>
            </p>
          </div>
          <div>
            <p>
              Total Amount: <span>{totalAmount}</span>
            </p>
            <button>Checkout Now</button>
          </div>
        </div>
        </div>
        ): (
          <div>
            <p>Your cart is empty!</p>
            <NavLink to="/">
              <button>Shop Now</button>
            </NavLink>
            
          </div>
        )
      }
    </div>
  )
}
