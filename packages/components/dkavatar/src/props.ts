import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'
import { DK_SHAPE, DK_SIZE } from '../../_tokens'
import type { dkPlusShapeType, dkPlusSize } from '../../_interface'
export const dkAvatarProps = {
  size: setStringProp(null, (val: dkPlusSize) => {
    return DK_SIZE.includes(val)
  }),
  shape: setStringProp(null, (val: dkPlusShapeType) => {
    return DK_SHAPE.includes(val)
  }),
  icon: setStringProp()
}

export type DkAvatarType = ExtractPropTypes<typeof dkAvatarProps>
