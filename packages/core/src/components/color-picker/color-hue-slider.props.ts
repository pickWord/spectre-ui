import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export interface ColorHueSliderProps extends ComponentProps<HTMLDivElement> {
  vertical?: boolean
  width?: number
  sliderWidth?: number
}

export function generateProps(propsRaw: ColorHueSliderProps) {
  return splitProps(mergeProps({
    vertical: false,
    width: 168,
    sliderWidth: 12,
  }, propsRaw), customEventHandlersName)
}