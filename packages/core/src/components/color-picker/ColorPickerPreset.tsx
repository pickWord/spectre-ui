import { ColorPickerPanel } from './ColorPickerPanel'
import { ColorSaturation } from './ColorSaturation'
import { ColorHue } from './ColorHue'
import { ColorAlpha } from './ColorAlpha'
import { SpInput } from '../input'
import { ColorPickerPresetProps, generateProps } from './color-picker-preset.props'
import { mergeClasses } from '../../utils'
import { createEffect, createSignal } from 'solid-js'
import Color from 'color'

export const ColorPickerPreset = (propsRaw: ColorPickerPresetProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [color, setColor] = createSignal(props.value)

  const colorPickerPresetClasses = () => mergeClasses([
    'sp-color-picker-preset',
    props.class ?? '',
  ])

  createEffect(() => {
    setColor(props.value)
  })

  function onChangeColor(value: Color) {
    setColor(value)
  }

  return (
    <div
      ref={props.ref}
      class={colorPickerPresetClasses()}
      classList={props.classList}
      style={props.style}
      {...eventHandlers}
    >
      <ColorPickerPanel value={color()} change={onChangeColor}>
        <ColorSaturation />
        <ColorHue class='sp-color-picker-preset-hue' />
        <ColorAlpha class='sp-color-picker-preset-alpha' />
        <div class='sp-color-picker-preset-inputs'>
          <SpInput size='small' value={color().hexa()} />
        </div>
      </ColorPickerPanel>
    </div>
  )
}