import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon/CartIcon";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtils";
import { connect } from "react-redux";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCartHidden } from "../../redux/Cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/Users/user-selector";
import { signOutCurrentuser } from "../../redux/Users/user-action";
const Header = ({ currentUser, hidden, signOutCurrentuser }) => {
  const signOut = () => {
    auth.signOut();
    signOutCurrentuser();
  };
  useEffect(() => {
    if (currentUser) {
      console.log("i am executed");
    }
  }, [currentUser]);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <button className='option' onClick={signOut}>
            SIGN OUT
          </button>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropDown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOutCurrentuser: () => dispatch(signOutCurrentuser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
