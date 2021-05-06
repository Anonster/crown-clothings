import React, { useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import "./App.scss";
import Header from "./Components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./Pages/Checkout/Checkout";
import Signin from "./Pages/SignInAndSingUp/SignInAndSingUp";
import { selectCurrentUser } from "./redux/Users/user-selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/Users/user-action";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Signin />)}
        />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
