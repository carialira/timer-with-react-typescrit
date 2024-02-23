import { ButtonContainer, buttonVariant } from './Button.styles'

interface PropsButton {
  variant: buttonVariant
}

export function Button({ variant }: PropsButton) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
