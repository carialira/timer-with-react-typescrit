import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const baseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border: 0;
  padding: 1rem;

  border-radius: 8px;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(baseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  transition: background-color 1s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(baseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  transition: background-color 1s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
