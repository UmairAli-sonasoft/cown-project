import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectHidden } from '../../redux/cart/CartSelector'
import { selectCurrentUser } from '../../redux/user/UserSelector'

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from './header.styles'

import { auth } from "../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../ShoppingCart/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown';


function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/' className="logo-container">
        <Logo className="logo" />
      </LogoContainer>

      <OptionContainer >
        <OptionLink to="shop" > SHOP </OptionLink>
        <OptionLink to="contact"> CONTACT </OptionLink>

        {currentUser ? (
          <OptionLink as='div'
            onClick={() => auth.signOut()} >
            SIGN OUT
            </OptionLink>
        ) : (
            <OptionLink to="/signIn" className="option">
              SIGN IN
            </OptionLink>
          )
        }

        <CartIcon />

      </OptionContainer>
      {hidden ? (null) : (<CartDropdown />)}
    </HeaderContainer>
  )
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
})

export default connect(mapStateToProps)(Header)
