import { ComponentProps } from '../../types'
import { mergeProps, splitProps, JSX } from 'solid-js'
import { customEventHandlersName } from '../../events'

export interface CascadeSelectOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  label?: JSX.Element
  value?: string
  children?: CascadeSelectOption[]
  disabled?: boolean
}

export interface CascadeSelectPanelProps extends ComponentProps<HTMLDivElement> {
  options?: CascadeSelectOption[]
}

export function generateProps(propsRaw: CascadeSelectPanelProps) {
  return splitProps(mergeProps({ }, propsRaw), customEventHandlersName)
}