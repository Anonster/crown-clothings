import React from "react";
import "./Checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItem,
  selectCartTotal,
} from "../../redux/Cart/cart-selectors";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import StripeButton from "../../Components/StripButton/StripButton";
const Checkout = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItems) => (
      <CheckoutItem key={cartItems.id} cartItem={cartItems} />
    ))}
    <div className='total'>Total: ${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for Payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV 123
    </div>
    <StripeButton price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(Checkout);
