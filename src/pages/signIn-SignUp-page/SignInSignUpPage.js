import React from 'react'
import SignIn from '../../component/SignIn/SignIn'
import SignUp from '../../component/SignUp/SignUp';
import './SignIn-SignUp-Page.scss'

export default function SignInSignUpPage() {
  return (
    <div className="sign-in-sign-up" >
      <SignIn />
      <SignUp />
    </div>
  )
}
