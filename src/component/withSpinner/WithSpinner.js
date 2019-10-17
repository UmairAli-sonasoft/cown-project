import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles'

import React from 'react'

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay >
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
      )
  }
  return Spinner
}

export default WithSpinner
