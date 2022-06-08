import { ChangeEvent, FocusEvent } from 'react'

export type Props = {
  placeholder?: string
  autoComplete?: string
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  inputProps: object
  value?: string
}
