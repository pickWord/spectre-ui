import { mergeProps, splitProps } from 'solid-js'
import { ScrollBarProps } from './scrollbar.props'
import { customEventHandlersName } from '../../events'

export interface HorizontalScrollbarProps extends ScrollBarProps {
  width: number
  sliderX: number
  sliderWidth: number
}

export function generateProps(propsRaw: HorizontalScrollbarProps) {
  return splitProps(mergeProps({}, propsRaw), customEventHandlersName)
}

