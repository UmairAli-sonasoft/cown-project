import React, { useState } from 'react'
import './SignIn.scss'

import FormInput from "../FormInput/FormInput";
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../firebase/firebase.utils'

const SignIn = () => {

  const [userCredential, setCredential] = useState({
    email: '',
    password: ''
  })
  const { email, password } = userCredential

  const handleSubmit = async event => {
    event.preventDefault()


    await auth.signInWithEmailAndPassword(email, password)

    setCredential({ email: '', password: '' })
  }

  const handleChange = event => {
    const { name, value } = event.target
    setCredential({ ...userCredential, [name]: value }, () => {
    })

  }

  return (
    <div className="sign-in">

      <h2>I Already Have an Account</h2>
      <span>SignIn with email and Password</span>

      <form onSubmit={handleSubmit}>

        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email:'
          required
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          required
          handleChange={handleChange}
          label='Password:'
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
            SignIn Google
          </CustomButton>
        </div>

      </form>

    </div>
  )
}

export default SignIn;