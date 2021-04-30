import "./CartDropDown.scss";
import { connect } from "react-redux";
import CustomButton from "../Custombutton/Custombutton";
import CartItems from "../CartItems/CartItems";
import { selectCartItem } from "../../redux/Cart/cart-selectors";
import { withRouter } from "react-router";
import { toogleCartHidden } from "../../redux/Cart/cart-action";
const CartDropDown = ({ cartItems, history, toogleCartHidden }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems ? (
          cartItems.map((item) => <CartItems key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toogleCartHidden();
        }}
      >
        Go To CheckOut
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({ cartItems: selectCartItem(state) });
const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
