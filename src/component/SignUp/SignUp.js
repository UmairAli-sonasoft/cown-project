import React, { useState } from 'react'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import FormInput from "../FormInput/FormInput";
import CustomButton from "../custom-button/CustomButton";

const SignUp = () => {
  const [userCredential, setCredential] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userCredential

  const handleSubmit = async event => {
    event.preventDefault()


    if (password !== confirmPassword) {
      alert('Password and confirm password not matched')
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })

      setCredential({ // clear text fields
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })


    } catch (error) {
      console.log('error creating during SignUp', error.message)
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setCredential({ ...userCredential, [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span className="sub-title"> Create an Account with Email and password</span>

      <form onSubmit={handleSubmit}>

        <FormInput
          name="displayName"
          type='displayName'
          value={displayName}
          handleChange={handleChange}
          label='displayName'
          required
        />

        <FormInput
          name="email"
          type='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />

        <FormInput
          name="password"
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />

        <FormInput
          name="confirmPassword"
          type='password'
          value={confirmPassword}
          handleChange={handleChange}
          label='confirmPassword'
          required
        />
        <CustomButton type='submit' >SIGN UP</CustomButton>
      </form>

    </div>
  )
}

export default SignUp
