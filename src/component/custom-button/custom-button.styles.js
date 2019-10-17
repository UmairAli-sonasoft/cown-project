import styled, { css } from 'styled-components'

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #2b6ace;
      border: none;
    } 
`;

const ButtonStyles = css`
background-color: black;
color: white;
border: none;

 &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const InvertedButtonStyles = css`
  background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

const getButtonStyle = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }

  return props.inverted ? InvertedButtonStyles : ButtonStyles
}

export const CustomButtonContainer = styled.button`
min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

 ${getButtonStyle}
`;