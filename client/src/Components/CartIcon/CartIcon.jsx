import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shoppingBag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/Cart/cart-selectors";
import { toogleCartHidden } from "../../redux/Cart/cart-action";
const CartIcon = ({ toogleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toogleCartHidden}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
