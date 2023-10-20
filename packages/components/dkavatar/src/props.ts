import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'
import { DK_SIZE } from '../../_tokens'
import type { dkPlusSize } from '../../_interface'
export const dkAvatarProps = {
  size: setStringProp(null, (val: dkPlusSize) => {
    return DK_SIZE.includes(val)
  })
}

export type DkAvatarType = ExtractPropTypes<typeof dkAvatarProps>
