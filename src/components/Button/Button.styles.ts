import styled from 'styled-components'
// import styled, { css } from "styled-components";

export type buttonVariant =
  | 'gray-100'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'green-300'
  | 'green-500'
  | 'green-700'
  | 'red-500'
  | 'red-700'
  | 'yellow-500'

interface PropsButtonContainer {
  variant: buttonVariant
}

export const ButtonContainer = styled.button<PropsButtonContainer>`
  border: 0;
  border-radius: 4px;

  color: ${(props) => props.theme.white};
  font-weight: bold;
  margin: 8px;

  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme[props.variant]};

  transition: filter 2s;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(2px 2px 5px ${(props) => props.theme[props.variant]});
  }
`

/* ${(props) => {
  return css`
    background-color: ${buttonVariants[props.variant]};
  `;
}} */
