import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/UserSelector'

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './component/header/Header';
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";


import SignInSignUpPage from './pages/signIn-SignUp-page/SignInSignUpPage';
import {
  auth,
  createUserProfileDocument,
} from './component/firebase/firebase.utils';
import setCurrentUser from './redux/user/userAction'

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const { setCurrentUser } = this.props;
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signIn'
            render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInSignUpPage />}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)