import React, { useContext } from "react";
import { Button } from "reactstrap";
import { Context } from "../Context/Context";

const CartItems = ({ id, name, price, pic, qty }) => {
    
  const { increase, decrease, remove } = useContext(Context);

  const inc = () => {
    console.log("Hi");
    increase(id);
  };
  const dec = () => {
    decrease(id);
  };
  const removeItems = () => {
    remove(id);
  };
  return (
    <div>
      <img src={pic} alt="" />
      <p>{name}</p>
      <p>{price}</p>
      <Button onClick={inc}>+</Button>
      <span>{qty}</span>
      <Button onClick={dec}>-</Button>
      <Button onClick={removeItems}>Remove Item</Button>
    </div>
  );
};
export default CartItems;
