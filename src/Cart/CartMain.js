import React from 'react';
import UserCart from './UserCart';
import CartTotal from './CartTotal'

export default function CartMain (props) {

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <UserCart 
        CartState={props.CartState}
        CurrencyFormat={props.CurrencyFormat}
      />
    <CartTotal 
      TotalState={props.TotalState}
      TotalCurrency={props.TotalCurrency}
    />
    </section>
  )
}