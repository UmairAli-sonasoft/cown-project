import React from 'react'
import {CustomButtonContainer} from './custom-button.styles'

export default function CustomButton({ children, ...Props }) {
  return (
    <CustomButtonContainer {...Props}>
      {children}
    </ CustomButtonContainer>
  )
}
