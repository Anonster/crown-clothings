import React, { useEffect, useRef } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import "./App.css";
import Header from "./Components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./Pages/Checkout/Checkout";
import Signin from "./Pages/SignInAndSingUp/SignInAndSingUp";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { selectCurrentUser } from "./redux/Users/user-selector";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/Users/user-action";
import { createStructuredSelector } from "reselect";

const App = ({ setCurrentUser, currentUser }) => {
  const unsubscribeFromAuth = useRef(null);
  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
    });
    return () => {
      unsubscribeFromAuth.current = null;
    };
  }, [setCurrentUser]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/contact' component={Contact} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect path='/' /> : <Signin />)}
        />
        <Route path='/checkout' component={Checkout} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
